# Standard Library
from typing import Optional

# Internal
from analysis.src.utils.structures.model import Model


class KanoonRank(Model):

    __slots__ = [
        'name', 'city', 'national_ranking', 'district_ranking', 'district', 'student_id',
        'kanoon_experience', 'kanoon_level_avg', 'kanoon_exam_count', 'accepted_major', 'university',
        'school_major', 'exam_year'
    ]

    def __init__(self, name: str, city: str, national_ranking: int, district_ranking: int, district: int,
                 student_id: str, kanoon_experience: int, kanoon_level_avg: int, kanoon_exam_count: int,
                 accepted_major: str, university: str, school_major: Optional[int] = None,
                 exam_year: Optional[int] = None):
        super().__init__()
        self.name = name
        self.city = city
        self.national_ranking = national_ranking
        self.district_ranking = district_ranking
        self.district = district
        self.student_id = student_id
        self.kanoon_experience = kanoon_experience
        self.kanoon_level_avg = kanoon_level_avg
        self.kanoon_exam_count = kanoon_exam_count
        self.accepted_major = accepted_major
        self.university = university
        self.school_major = school_major
        self.exam_year = exam_year


class MathKonkurResults(Model):

    __slots__ = [
        'student_id', 'year', 'school_major',
        'math', 'physics', 'chemistry', 'literature', 'arabic', 'religion', 'language'
    ]

    def __init__(self, student_id: str, year: int,
                 math: int, physics: int, chemistry: int, literature: int, arabic: int, religion: int, language: int):
        super().__init__()
        self.school_major = 1
        self.year = year
        self.student_id = student_id
        self.math = math
        self.physics = physics
        self.chemistry = chemistry
        self.literature = literature
        self.arabic = arabic
        self.religion = religion
        self.language = language
