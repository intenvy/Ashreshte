# Standard Library
from typing import Optional

# Internal
from analysis.src.utils.structures.model import Model


class LinkedInMigration(Model):

    __slots__ = [
        'university', 'major', 'start_year', 'in_iran', 'not_in_iran'
    ]

    def __init__(self, university: str, major: str, start_year: int, in_iran: int, not_in_iran: int):
        super().__init__()
        self.university = university
        self.major = major
        self.start_year = start_year
        self.in_iran = in_iran
        self.not_in_iran = not_in_iran
