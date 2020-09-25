# Standard Library
from typing import Union

# Site Packages
from requests import Response, Request, Session
import requests

# Internal
from analysis.src.core.crawler.abstracts.fetcher.fetcher import MultiThreadHTTPFetcher


class JobVisionFetcher(MultiThreadHTTPFetcher):
    base_url: str = 'https://jobvision.ir'
    data_url: str = 'https://jobvision.ir/JobPost/GetJobPostListData'

    def __init__(self, max_attempts: int, timeout: int, failed_sleep_time: Union[int, float], max_threads: int):
        super().__init__(max_attempts, timeout, failed_sleep_time, max_threads)

    def _init_session(self) -> Session:
        session = Session()
        session.headers.update(
            {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)'
                              ' Chrome/84.0.4147.135 Safari/537.36'
            }
        )
        return session

    def _build_job_list_request(self, job_group: int, page_index: int, page_size: int) -> Request:
        return Request(
            'GET',
            self.data_url,
            params={
                'Page': page_index,
                'SortBy': 0,
                'pageSize': page_size,
                'JobTitle': '',
                'SelectedCity': '',
                'SelectedCityRegionGroup': '',
                'SelectedIndustrial': '',
                'SelectedLevelOfSeniority': '',
                'SelectedOrganization': '',
                'SelectedJobGroup': job_group,
                'SelectedWorkType': '',
                'SelectedWorkExprience': '',
                'MinMatchingPercent': 80,
                'MaxMatchingPercent': 100,
                'IsForJobFair': 'false',
                'SelectedJobPostDateRanges': '',
                'SelectedJobPostSalaryRanges': ''
            }
        )

    def fetch_jobs_list(self, job_group: int, page_index: int, page_size: int) -> Response:
        request = self._build_job_list_request(job_group, page_index, page_size)
        return self._fetch(request)

    def _build_job_request(self, job_href: str) -> Request:
        return Request('GET', f'{self.base_url}{job_href}')

    def fetch_job(self, href: str) -> Response:
        request = self._build_job_request(href)
        return self._fetch(request)
