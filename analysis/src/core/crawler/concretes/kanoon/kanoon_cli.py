# Standard Library
import time

# Internal
from analysis.src.core.crawler.abstracts.cli.crawler_cli import CrawlerCommandLine
from .kanoon_crawler import KanoonRankCrawler


class KanoonRankCmd(CrawlerCommandLine):

    __slots__ = '_crawler'

    def __init__(self, crawler: KanoonRankCrawler):
        super().__init__()
        self._crawler = crawler

    def do_crawl(self, inp: str) -> None:
        super().do_crawl(inp)
        if self.tag == 'ranks':
            for year in self.options:
                start = time.time()
                self._crawler.crawl_major_year(int(year))
                end = time.time()
                print(f'crawled: {self._crawler.total_crawled}, '
                      f'enqueued_submission: {self._crawler.enqueued_submissions}, '
                      f'submissions: {self._crawler.submissions}')
                print(f'Took me {end - start} ms to capture results')
        else:
            print(f'Invalid tag "{self.tag}"')
