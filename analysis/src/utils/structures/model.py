# Standard Library
from __future__ import annotations
from typing import Iterable, Union, Any, Tuple, Optional
from abc import ABC


def convert_to_sql(value: Union[int, float, str, None]) -> str:
    if isinstance(value, str):
        return f'\'{value}\''
    elif value is None:
        return 'NULL'
    else:
        return str(value)


class Model(ABC):

    def __len__(self) -> int:
        return len(self.__slots__)

    def __eq__(self, other: Model) -> bool:
        if type(self) is type(other):
            for attr in self.__slots__:
                if self.__getattribute__(attr) != other.__getattribute__(attr):
                    return False
            return True
        else:
            return False

    def __str__(self) -> str:
        return type(self).__name__ + \
               f'({", ".join([f"{attr} : {self.__getattribute__(attr)}" for attr in self.__slots__])})'

    def __repr__(self) -> str:
        return self.__str__()

    @property
    def size(self) -> int:
        return len(self.__slots__)

    @property
    def attrs(self) -> Iterable[str]:
        return self.__slots__

    @property
    def values(self) -> Tuple[Any]:
        return tuple(self.__getattribute__(attr) for attr in self.__slots__)

    def get_sql_values(self) -> str:
        return '(' + ','.join([
            convert_to_sql(self.__getattribute__(attr))
            for attr in self.__slots__
        ]) + ')'

    def _validate_index(self, index: int) -> int:
        if type(index) is int:
            if index < 0:
                if len(self) + index < 0:
                    raise IndexError(f'Record object index out of range min: 0 passed: {index}')
                return len(self) + index
            if index >= len(self.__slots__):
                raise IndexError(f'Record object index out of range max: {len(self) - 1} passed: {index}')
            return index
        else:
            IndexError(f'Record object single index must be int, passed: {type(index)}')

    def _validate_slice_start(self, start: Optional[int]) -> int:
        if start:
            return self._validate_index(start)
        else:
            return 0

    def _validate_slice_stop(self, stop: Optional[int]) -> int:
        if stop:
            return self._validate_index(stop)
        else:
            return len(self.__slots__)

    def _validate_slice(self, slice_: slice) -> Tuple[int, int]:
        return (
            self._validate_slice_start(slice_.start),
            self._validate_slice_stop(slice_.stop)
        )

    def __getitem__(self, index: Union[int, slice, str]) -> Union[Any, Tuple[Any]]:
        if type(index) is int:
            index = self._validate_index(index)
            return self.__getattribute__(self.__slots__[index])

        elif type(index) is slice:
            start, stop = self._validate_slice(index)
            return tuple(
                self.__getattribute__(self.__slots__[idx])
                for idx in range(start, stop)
            )

        elif type(index) is str:
            return self.__getattribute__(index)

        else:
            raise IndexError(f'Record object index("{index}") must be int/slice/str, passed: {type(index)}')

    def __setitem__(self, index: Union[int, slice, str], value: Any) -> None:
        if type(index) is int:
            index = self._validate_index(index)
            self.__setattr__(self.__slots__[index], value)

        elif type(index) is slice:
            start, stop = self._validate_slice(index)
            for idx in range(start, stop):
                self.__setattr__(self.__slots__[idx], value)

        elif type(index) is str:
            self.__setattr__(index, value)

        else:
            raise IndexError(f'Record object index("{index}") must be int/slice/str, passed: {type(index)}')


class Entity(Model, ABC):

    __slots__ = 'id',

    def __init__(self, id_: int):
        self.id = id_

    def __hash__(self):
        return self.id.__hash__()

    def __eq__(self, other: Union[Model, Entity]):
        return type(self) is type(other) and self.id == other.id
