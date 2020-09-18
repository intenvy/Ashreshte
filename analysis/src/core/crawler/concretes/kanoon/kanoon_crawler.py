# Standard Library
from concurrent.futures import as_completed
from concurrent.futures.thread import ThreadPoolExecutor
from threading import Thread
from typing import List

# Internal
from analysis.src.core.crawler.abstracts.crawler import Crawler
from .kanoon_fetchers import KanoonRankFetcher, KanoonSchoolMajor
from .kanoon_parser import parse_kanoon_rank
from analysis.src.core.crawler.abstracts.submitter.submitter import SqliteDataSubmitter


class KanoonRankCrawler(Crawler):

    table_name = 'kanoon_ranks'

    __slots__ = 'total_crawled'

    def __init__(self, fetcher: KanoonRankFetcher, submitter: SqliteDataSubmitter):
        super().__init__()
        self.fetcher = fetcher
        self.submitter = submitter
        self.total_crawled = 0

    def crawl_major_year(self, year: int, major: KanoonSchoolMajor) -> None:
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
        print(f'[DONE] year={year}, major={major.name}, total_crawled={total_crawled}')

    def crawl_every_rank(self, years: range) -> None:
        self._is_crawling = True
        with ThreadPoolExecutor() as executor:
            futures = []
            for year in years:
                for major in KanoonSchoolMajor:
                    futures.append(executor.submit(self.crawl_major_year, year=year, major=major))
            for idx, future in enumerate(as_completed(futures)):
                # print(f'Job {idx+1} was completed, left: {len(futures) - idx - 1}')
                print('.')
        self._is_crawling = False
