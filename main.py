from analysis.src.core.crawler.concretes.kanoon import KanoonRankFetcher, KanoonRankCrawler
from analysis.src.core.crawler.abstracts import SqliteDataSubmitter
from analysis.src.core.crawler.concretes.kanoon.kanoon_enums import KanoonSchoolMajor
import time

fetcher = KanoonRankFetcher(10, 8, 0.5, 35)
submitter = SqliteDataSubmitter('test.db')
crawler = KanoonRankCrawler(fetcher, submitter)

start = time.time()
crawler.crawl_major_year(98, KanoonSchoolMajor.MATHEMATICS)
end = time.time()

print(f'crawled: {crawler.total_crawled}, enqueued_submission: {crawler.enqueued_submissions}, '
      f'submissions: {crawler.submissions}')
print(f'Took me {end-start} ms to capture results')
