# Standard Library
from abc import ABC, abstractmethod
from threading import Lock, Thread
from time import sleep as time_sleep
from queue import Queue
from typing import Tuple, Optional

# Internal
from analysis.src.utils.structures.stack import ModelStack


class Crawler(ABC):

    __slots__ = [
        'fetcher', 'submitter', '_queue', '_submission_thread', '_is_crawling',
        'submissions', 'enqueued_submissions'
    ]

    @abstractmethod
    def __init__(self):
        # self._submitter_lock = Lock()
        self._queue = Queue()
        self._submission_thread: Optional[Thread] = None
        self._is_crawling = False
        self.submissions = 0
        self.enqueued_submissions = 0

    def _enqueue_submission(self, table: str, stack: ModelStack):
        self.enqueued_submissions += len(stack)
        self._queue.put((table, stack))

    def _do_submission(self):
        while not self._queue.empty():
            submission: Tuple[str, ModelStack] = self._queue.get()
            self.submissions += len(submission[1])
            self.submitter.submit(submission[1], submission[0])

    def _submission_loop(self):
        self.submitter.connect()
        while True:
            self._do_submission()
            if not self._is_crawling:
                self._do_submission()
                self.submitter.commit()
                break
            time_sleep(1)

    def start_submission(self):
        self._submission_thread = Thread(target=self._submission_loop)
        self._submission_thread.start()
