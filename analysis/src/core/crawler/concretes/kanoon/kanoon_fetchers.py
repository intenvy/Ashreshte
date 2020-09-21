# Standard Library
from typing import Union

# Site Packages
from requests import Response, Request, Session
import requests

# Internal
from analysis.src.core.crawler.abstracts.fetcher.fetcher import MultiThreadHTTPFetcher
from analysis.src.core.crawler.concretes.kanoon.kanoon_enums import KanoonSchoolMajor


class KanoonRankFetcher(MultiThreadHTTPFetcher):

    data_url: str = 'http://www.kanoon.ir/Public/ShowStudentListTable'

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

    def _build_students_request(self, year: int, major: KanoonSchoolMajor, page_index: int) -> Request:
        return Request(
            'GET',
            self.data_url,
            params={
                'list': 't', 'year': year, 'groupCode': major.value,
                'alphanum': -1, 'pageIndex': page_index, 's': 0, 'yr': 0
            }
        )

    def fetch_students(self, year: int, major: KanoonSchoolMajor, page_index: int) -> Response:
        request = self._build_students_request(year, major, page_index)
        return self._fetch(request)


class KanoonMathKonkurResultsFetcher(MultiThreadHTTPFetcher):

    data_url: str = 'http://www.kanoon.ir/Konkori/KonkourResults'

    def __init__(self, max_attempts: int, timeout: int, failed_sleep_time: Union[int, float], max_threads: int):
        super().__init__(max_attempts, timeout, failed_sleep_time, max_threads)

    def _init_session(self) -> Session:
        session = Session()
        session.headers.update(
            {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)'
                              ' Chrome/84.0.4147.135 Safari/537.36',
                'Accept': '*/*',
                'Accept-Encoding': 'gzip, deflate',
                'Accept-Language': 'en-US, en;',
                'Connection': 'keep-alive',
                'Cookie': '_ga=GA1.2.1390120631.1596038768; '
                          'kfacommnet=e23a3fab-b176-4f33-b86f-b5387972d754; '
                          'tlc=true; '
                          'pushNotification-shownCount-2195=9; '
                          'pushNotification-notWantPopUp-2195=true',
                'X-Requested-With': 'XMLHttpRequest'
            }
        )
        return session

    def _build_konkur_results_request(self, student_id: str, year: int) -> Request:
        return Request(
            'GET',
            self.data_url,
            params={
                'counter': student_id, 'year': year, 'dept': 1,
                '_': '1600685852179'
            }
        )

    def fetch_konkur_results(self, student_id: str, year: int) -> Response:
        # request = self._build_konkur_results_request(student_id, year)
        # return self._fetch(request)
        return requests.get(f'http://www.kanoon.ir/Konkori/KonkourResults?counter={student_id}&dept=1&year={year}')
