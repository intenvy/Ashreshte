# Standard Library
from cmd import Cmd
from abc import ABC

# Internal
from typing import Optional, List


class CrawlerCommandLine(ABC, Cmd):

    __slots__ = '_crawler', 'tag', 'options'

    def __init__(self):
        super().__init__()
        self.tag: Optional[str] = None
        self.options: Optional[List[str]] = None

    def do_crawl(self, inp: str):
        args = inp.split()
        self.tag = args[0]
        self.options = args[1:]
