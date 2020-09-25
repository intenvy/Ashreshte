# Standard Library
from threading import Thread
from concurrent.futures import ThreadPoolExecutor, as_completed
from typing import List

# Internal
from analysis.src.core.crawler.abstracts.crawler import Crawler
from analysis.src.core.crawler.abstracts.submitter.submitter import SqliteDataSubmitter
from analysis.src.utils.structures.stack import ModelStack
from .jv_models import JvJob
from .jv_fetchers import JobVisionFetcher
from .jv_parsers import parse_jv_job, parse_jv_job_list_urls


class JobVisionCrawler(Crawler):

    table_name = 'job_vision_jobs'

    __slots__ = 'total_crawled',

    def __init__(self, fetcher: JobVisionFetcher, submitter: SqliteDataSubmitter):
        super().__init__()
        self.fetcher = fetcher
        self.submitter = submitter
        self.total_crawled = 0

    def fetch_job(self, job_group: int, major_name: str, job_href: str) -> JvJob:
        return parse_jv_job(self.fetcher.fetch_job(job_href), major_name, job_group)

    def fetch_jobs(self, job_group: int, major_name: str, job_hrefs: List[str]) -> ModelStack:
        stack = ModelStack()
        with ThreadPoolExecutor(max_workers=500) as executor:
            futures = []
            for href in job_hrefs:
                futures.append(
                    executor.submit(self.fetch_job, job_group=job_group, major_name=major_name, job_href=href)
                )
            for idx, future in enumerate(as_completed(futures)):
                stack.append(future.result())
        return stack

    def fetch_job_list(self, job_group: int, page_index: int, page_size: int) -> List[str]:
        return parse_jv_job_list_urls(self.fetcher.fetch_jobs_list(job_group, page_index, page_size))

    def fetch_hrefs(self, job_group: int, major_name: str) -> List[str]:
        stack = []
        total_pages = int(self.fetcher.fetch_jobs_list(job_group, 1, 50).json()['total'])
        with ThreadPoolExecutor(max_workers=500) as executor:
            futures = []
            for page_index in range(1, total_pages+1):
                futures.append(
                    executor.submit(self.fetch_job_list, job_group=job_group, page_index=page_index, page_size=50)
                )
            for idx, future in enumerate(as_completed(futures)):
                stack.extend(future.result())
        return stack

    def crawl_major_jobs(self, major_name: str, job_group: int) -> None:
        with self.task_lock as task_lock:
            self._is_crawling = True

            hrefs = self.fetch_hrefs(job_group, major_name)
            jobs = self.fetch_jobs(job_group, major_name, hrefs)
            self._enqueue_submission(self.table_name, jobs)
            self.total_crawled += len(jobs)
            self._is_crawling = False
            with self.submission_lock as submission_lock:
                print(f'[DONE] major_name: {major_name}, job_group: {job_group}')
