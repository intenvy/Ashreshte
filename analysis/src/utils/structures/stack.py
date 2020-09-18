# Standard Library
from __future__ import annotations
from collections import deque
from typing import List, Iterable, Union, Any, Tuple, Optional, Dict

# Site Packages
from pandas import DataFrame

# Internal
from .model import Model


class ModelStack(deque, Iterable):

    def __init__(self, records: List[Model] = None, max_len: Optional[int] = None):
        if records:
            super().__init__(records, max_len)
        else:
            super().__init__(maxlen=max_len)

    def push_back(self, record: Model) -> None:
        self.append(record)

    def push_front(self, record: Model) -> None:
        self.appendleft(record)

    def pop_back(self) -> None:
        if len(self):
            self.pop()

    def pop_front(self) -> None:
        if len(self):
            self.popleft()

    def _validate_index(self, index: int) -> int:
        if type(index) is int:
            if index < 0:
                if index + len(self) < 0:
                    raise IndexError(f'RecordStack object index out of range, min: 0 passed: {index}')
                else:
                    return index + len(self)

            if index >= len(self):
                raise IndexError(f'RecordStack object index out of range, max: {len(self) - 1} passed: {index}')

            return index

        else:
            IndexError(f'RecordStack single index must be int, passed: {type(index)}')

    def _validate_slice_start(self, start: Optional[int]) -> int:
        if start:
            return self._validate_index(start)
        else:
            return 0

    def _validate_slice_stop(self, stop: Optional[int]) -> int:
        if stop:
            return self._validate_index(stop)
        else:
            return len(self)

    def _validate_slice(self, slice_: slice) -> Tuple[int, int]:
        return (
            self._validate_slice_start(slice_.start),
            self._validate_slice_stop(slice_.stop)
        )

    def get_sql_values(self) -> str:
        if len(self):
            return ','.join([item.get_sql_values() for item in self])
        else:
            return ''

    def get_sql_columns(self) -> str:
        if len(self):
            return '(' + ','.join(
                [
                    '\'' + col + '\''
                    for col in super(ModelStack, self).__getitem__(0).attrs
                ]
            ) + ')'
        else:
            return ''

    @property
    def shape(self) -> Tuple[int, int]:
        if len(self):
            return len(self), len(super().__getitem__(0))
        else:
            return 0, 0

    @property
    def is_empty(self):
        return len(self) == 0

    @property
    def columns(self) -> Optional[Iterable[str]]:
        if len(self):
            return super(ModelStack, self).__getitem__(0).attrs

    def __getitem__(self, index: Union[int, slice, str, Tuple[int, int]]) -> Union[Model, List[Model], List[Any]]:
        if type(index) is int:
            index = self._validate_index(index)
            return super(ModelStack, self).__getitem__(index)

        elif type(index) is slice:
            start, stop = self._validate_slice(index)
            return [super(ModelStack, self).__getitem__(idx) for idx in range(start, stop)]

        elif type(index) is str:
            return [getattr(item, index) for item in self]

        elif type(index) is tuple:
            return self[index[0]][index[1]]

        else:
            raise IndexError(f'RecordStack index must be int/slice/str/tuple, passed: {type(index)}')

    def __setitem__(self, index: Union[int, slice, str, Tuple[int, int]], value: Union[Model, Any]) -> None:
        if type(index) is int:
            index = self._validate_index(index)
            super(ModelStack, self).__setitem__(index, value)

        elif type(index) is slice:
            start, stop = self._validate_slice(index)
            for idx in range(start, stop):
                super(ModelStack, self).__setitem__(idx, value)

        elif type(index) is str:
            for idx in range(len(self)):
                self[idx][index] = value

        elif type(index) is tuple:
            self[index[0]][index[1]] = value

        else:
            raise IndexError(f'RecordStack object index("{index}") must be int/slice/str/tuple, passed: {type(index)}')

    def __dict__(self) -> Dict[str, List[Any]]:
        if len(self):
            return {col: [getattr(item, col) for item in self] for col in self.columns}
        else:
            return {}

    def framed(self) -> DataFrame:
        return DataFrame(self.__dict__())

    def __str__(self) -> str:
        if len(self):
            return '\n'.join([f'{col}: {[getattr(item, col) for item in self]}' for col in self.columns])
        else:
            return ''

    def __repr__(self) -> str:
        return '[ModelStack]\n' + self.__str__()

    def __bool__(self) -> bool:
        return len(self) != 0
