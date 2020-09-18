# Standard Library
from time import sleep as time_sleep
from abc import ABC, abstractmethod
from typing import Tuple, Any, Union, Optional
from threading import Semaphore

# Site Packages
from requests import Session, Request, Response, PreparedRequest, Timeout, HTTPError

# Internal
from analysis.src.exceptions.fetching import BadRequestException, NotFoundException
from analysis.src.utils.http.connections import ping


def log_error(msg: str):
    print(f'[ERROR] {msg}')


class Fetcher(ABC):

    @abstractmethod
    def _fetch(self, arg: Any) -> Response:
        pass


class HTTPFetcher(Fetcher, ABC):

    __slots__ = '_session', '_max_attempts', '_timeout', '_failed_sleep_time',

    ping_url: str
    data_url: str

    def __init__(self, max_attempts: int, timeout: int, failed_sleep_time: Union[int, float]):
        self._max_attempts = max_attempts
        self._timeout = timeout
        self._failed_sleep_time = failed_sleep_time
        self._session = self._init_session()

    @staticmethod
    def _validate_response_http_status(response: Response) -> Optional[Response]:
        if response.status_code // 100 == 2:
            return response
        elif response.status_code == 400:
            raise BadRequestException(response.text)
        elif response.status_code == 404:
            raise NotFoundException(response.text)
        else:
            msg: str = response.text.replace('\n', ' ')
            log_error(f'Request Failed Status: "{response.status_code}", Message: "{msg}"')

    def on_timeout(self, exception: Timeout):
        log_error(f'Timeout message: "{exception.args[0]}"')
        time_sleep(self._failed_sleep_time)

    def on_connection_error(self, exception: ConnectionError):
        log_error(f'Timeout message: "{exception.args[0]}"')
        time_sleep(self._failed_sleep_time)

    def on_http_error(self, exception: HTTPError):
        log_error(f'HTTPError message: "{exception.args[0]}"')
        time_sleep(self._failed_sleep_time)

    def _fetch(self, request: Request) -> Response:
        prepared: PreparedRequest = request.prepare()

        for i in range(self._max_attempts):
            try:
                response: Response = self._validate_response_http_status(
                    self._session.send(
                        prepared,
                        timeout=self._timeout
                    )
                )
                if response:
                    return response
                else:
                    time_sleep(self._failed_sleep_time)
                    continue
            except Timeout as error:
                self.on_timeout(error)
            except ConnectionError as error:
                self.on_connection_error(error)
            except HTTPError as error:
                self.on_http_error(error)

    def ping(self) -> Tuple[int, int, int]:
        return ping(self.ping_url)

    def _init_session(self) -> Session:
        print(self.ping())
        session: Session = Session()
        session.verify = True
        return session


class MultiThreadHTTPFetcher(HTTPFetcher, ABC):

    __slots__ = '_session', '_max_attempts', '_timeout', '_failed_sleep_time', '_max_threads', '_semaphore'

    def __init__(self, max_attempts: int, timeout: int, failed_sleep_time: Union[int, float], max_threads: int):
        super().__init__(max_attempts, timeout, failed_sleep_time)
        self._max_threads = max_threads
        self._semaphore = Semaphore(value=max_threads)

    def _fetch(self, request: Request) -> Response:
        self._semaphore.acquire()
        response = super()._fetch(request)
        self._semaphore.release()
        return response
