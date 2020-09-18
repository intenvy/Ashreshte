# Standard Library
from abc import ABC, abstractmethod
from .....utils.structures.model import Model
from typing import Generator

# Site Packages
from bs4 import BeautifulSoup
from requests import Response


def html_soup(response: Response) -> BeautifulSoup:
    return BeautifulSoup(response.text, 'html.parser')


class SingleParserPipeLine(ABC):

    @abstractmethod
    def __call__(self, response: Response) -> Model:
        pass


class MultiParserPipeLine(ABC):

    @abstractmethod
    def __call__(self, response: Response) -> Generator[Model, None, None]:
        pass
