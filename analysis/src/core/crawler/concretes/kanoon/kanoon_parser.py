# Site Packages
from requests import Response
from bs4.element import ResultSet

# Internal
from analysis.src.utils.structures.stack import ModelStack
from analysis.src.core.crawler.abstracts import html_soup
from .kanoon_models import KanoonRank, MathKonkurResults
from .kanoon_enums import KanoonSchoolMajor


def _parse_int_zero_as_null(string: str) -> int:
    modified = string.strip()
    return 0 if modified == '' else int(modified)


def _parse_district(string: str) -> int:
    district = string.strip()
    if '1' in district or 'یک' in district:
        district = 1
    elif '2' in district or 'دو' in district:
        district = 2
    elif '3' in district or 'سه' in district:
        district = 3
    else:
        district = 0
    return district


def _build_rank(row: ResultSet, major: KanoonSchoolMajor, exam_year: int) -> KanoonRank:
    name_tag = row[0].find('a')
    rank = KanoonRank(
        name_tag.text.strip(),
        row[1].text.strip(),
        _parse_int_zero_as_null(row[2].text),
        _parse_int_zero_as_null(row[3].text),
        _parse_district(row[4].text),
        name_tag.get('href').strip().split('/')[3],
        _parse_int_zero_as_null(row[5].text),
        _parse_int_zero_as_null(row[6].text),
        _parse_int_zero_as_null(row[7].text),
        row[8].text.strip(),
        row[9].text.strip()
    )
    rank.school_major = major.value
    rank.exam_year = exam_year
    return rank


def parse_kanoon_rank(response: Response, major: KanoonSchoolMajor, exam_year: int) -> ModelStack:
    soup = html_soup(response)
    rows = soup.find('table').find('tbody').find_all('tr')
    ranks: ModelStack = ModelStack()
    for row in rows:
        data = row.find_all('td')
        rank = _build_rank(data, major, exam_year)
        ranks.push_back(rank)
    return ranks


def parse_math_konkur_results(student_id: str, year: int, response: Response) -> MathKonkurResults:
    results = {}
    soup = html_soup(response)
    rows = soup.find_all('tr')
    for row in rows:
        data = row.find_all('td')
        results[data[0].text.strip()] = int(data[1].text.split()[0].strip())

    return MathKonkurResults(
        student_id=student_id,
        year=year,
        math=results['رياضيات'] if 'رياضيات' in results else None,
        physics=results['فيزيك'] if 'فيزيك' in results else None,
        chemistry=results['شيمي'] if 'شيمي' in results else None,
        literature=results['ادبيات فارسي'] if 'ادبيات فارسي' in results else None,
        arabic=results['عربي'] if 'عربي' in results else None,
        religion=results['معارف'] if 'معارف' in results else None,
        language=results['زبان'] if 'زبان' in results else None
    )
