# Standard Library
from concurrent.futures import as_completed
from concurrent.futures.thread import ThreadPoolExecutor
from threading import Thread
from typing import List

# Internal
from analysis.src.core.crawler.abstracts.crawler import Crawler
from .kanoon_fetchers import KanoonRankFetcher, KanoonSchoolMajor, KanoonMathKonkurResultsFetcher
from .kanoon_parser import parse_kanoon_rank, parse_math_konkur_results
from analysis.src.core.crawler.abstracts.submitter.submitter import SqliteDataSubmitter
from analysis.src.utils.structures.stack import ModelStack
from analysis.src.core.crawler.concretes.kanoon.kanoon_models import MathKonkurResults


class KanoonRankCrawler(Crawler):

    table_name = 'kanoon_ranks'

    __slots__ = 'total_crawled',

    def __init__(self, fetcher: KanoonRankFetcher, submitter: SqliteDataSubmitter):
        super().__init__()
        self.fetcher = fetcher
        self.submitter = submitter
        self.total_crawled = 0

    def crawl_major_year(self, year: int, major: KanoonSchoolMajor = KanoonSchoolMajor.MATHEMATICS) -> None:
        with self.task_lock as task_lock:
            self._is_crawling = True
            self.start_submission()
            idx = 0
            tasks: List[Thread] = []
            total_crawled = 0
            while True:
                response = None
                parsed = None
                try:
                    response = self.fetcher.fetch_students(year, major, idx)
                    parsed = parse_kanoon_rank(response, major, year)
                except AttributeError as error:
                    break
                total_crawled += len(parsed)
                self._enqueue_submission(self.table_name, parsed)
                idx += 1
            self.total_crawled += total_crawled
            self._is_crawling = False
            with self.submission_lock as submission_lock:
                print(f'[DONE] year={year}, major={major.name}, total_crawled={total_crawled}')


class KanoonMathKonkurResultsCrawler(Crawler):

    table_name = 'kanoon_math_results'

    __slots__ = 'total_crawled',

    def __init__(self, fetcher: KanoonMathKonkurResultsFetcher, submitter: SqliteDataSubmitter):
        super().__init__()
        self.fetcher = fetcher
        self.submitter = submitter
        self.total_crawled = 0

    def fetch_one_result(self, student_id: str, year: int) -> MathKonkurResults:
        return parse_math_konkur_results(student_id, year, self.fetcher.fetch_konkur_results(student_id, year))

    def crawl_math_konkur_results(self, student_ids: List[str], year: int) -> None:
        with self.task_lock as task_lock:
            self._is_crawling = True
            stack = ModelStack()
            self.start_submission()
            tasks: List[Thread] = []
            total_crawled = 0

            with ThreadPoolExecutor(max_workers=500) as executor:
                futures = []
                for student_id in student_ids:
                    futures.append(
                        executor.submit(self.fetch_one_result, student_id=student_id, year=year)
                    )
                for idx, future in enumerate(as_completed(futures)):
                    stack.append(future.result())
                    total_crawled += 1

            self.total_crawled += total_crawled
            self._enqueue_submission(self.table_name, stack)
            self._is_crawling = False
            with self.submission_lock as submission_lock:
                print(f'[DONE] year={year}, total_crawled={total_crawled}')
