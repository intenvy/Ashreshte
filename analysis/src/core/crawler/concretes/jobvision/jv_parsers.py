# Standard Library
from typing import List, Dict

# Site Packages
from requests import Response
from bs4 import BeautifulSoup as Soup

# Internal
from .jv_models import JvJob


def parse_jv_job_list_urls(response: Response) -> List[str]:
    soup = Soup(response.json()['data'], 'html.parser').findAll(
        lambda tag: 'class' in tag.attrs and 'jobpost-box' in tag.attrs['class'] and 'headBox' not in tag.attrs['class']
    )
    return [job.get('data-href') for job in soup]


def parse_jv_job(response: Response, major_name: str, job_group: int) -> JvJob:
    job = Soup(response.text, 'html.parser').select(
        'div.col-md-12.col-xs-12.jobpost-main-container div.col-md-8.col-xs-12.right-mainCon')[0]

    main_info = job.select('div.col-md-10.inner-margin')[0].find_all('p')

    description = job.select('div.col-md-12.inner-margin.margin-row')
    out = JvJob(major_name=major_name, job_group=job_group, title=main_info[0].text.strip())
    for d in description:
        fields = d.select('div.col-md-6')
        for field in fields:
            spans = field.find_all('label')
            if spans:
                title = spans[0].text.strip()
                value = spans[1].text.strip()
                if title[-1] == ':':
                    title = title[:-1].strip()
                if title == 'صنعت':
                    out.industry = value
                elif title == 'نوع همکاری':
                    out.work_type = value
                elif title == 'روز و ساعت کاری':
                    out.work_hours = value
                elif title == 'حقوق':
                    out.salary = value
    return out
