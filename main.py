import requests
import pandas as pd

from analysis.src.core.crawler.concretes.kanoon.kanoon_fetchers import KanoonMathKonkurResultsFetcher
from analysis.src.core.crawler.abstracts.submitter.submitter import SqliteDataSubmitter
from analysis.src.core.crawler.concretes.kanoon.kanoon_crawler import KanoonMathKonkurResultsCrawler

fetcher = KanoonMathKonkurResultsFetcher(25, 10, 0.5, 45)
submitter = SqliteDataSubmitter('analysis/data/dataset.db')
crawler = KanoonMathKonkurResultsCrawler(fetcher, submitter)

df = pd.read_sql_table('kanoon_ranks', 'sqlite:///analysis/data/dataset.db')[['student_id', 'exam_year']]
df = dict(tuple(df.groupby(['exam_year'])['student_id']))

for key in df:
    df[key] = df[key].tolist()

for year in df:
    ids = df[year]
    crawler.crawl_math_konkur_results(student_ids=ids, year=year)
