# Standard Library
from typing import Optional

# Internal
from analysis.src.utils.structures.model import Model


class JvJob(Model):

    __slots__ = [
        'title', 'industry', 'job_group', 'major_name', 'work_hours', 'work_type', 'salary'
    ]

    def __init__(self, major_name: Optional[str] = None, job_group: Optional[int] = None, title: Optional[str] = None,
                 industry: Optional[str] = None, work_hours: Optional[str] = None, work_type: Optional[str] = None,
                 salary: Optional[str] = None):
        super().__init__()
        self.title = title
        self.industry = industry
        self.job_group = job_group
        self.major_name = major_name
        self.work_hours = work_hours
        self.work_type = work_type
        self.salary = salary
