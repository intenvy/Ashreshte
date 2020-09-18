# Standard Library
from abc import ABC
from typing import List

FIELD_SEPARATOR: str = ': '
FIELD_OFFSET: int = 10


def _field_and_value(indent_level: int, o: object, field: str, width: int):
    formatting: str = '{0: <' + str(width) + '}'
    return formatting.format(field) + FIELD_SEPARATOR + _stringify(
        indent_level + width + len(FIELD_SEPARATOR), o.__getattribute__(field)
    )


def _stringify(indent_level: int, o: object) -> str:

    if isinstance(o, Stringifyable):
        caption = f'[ {type(o).__name__} ]'
        fields: List[str] = sorted(list(field for field in o.__slots__))
        max_field_length = max(
            max(list(map(len, fields))) + len(FIELD_SEPARATOR) + FIELD_OFFSET,
            len(caption) + FIELD_OFFSET
        )

        indentation = indent_level * ' '
        ready_fields = [
            indentation + _field_and_value(indent_level, o, field, max_field_length)
            for field in fields
        ]
        return caption + '\n' + '\n'.join(ready_fields) + '\n' + indentation

    else:
        type_string = type(o).__name__
        string_form = type_string + str(o)
        if len(string_form) <= 300 and '\n' not in string_form:
            return string_form
        else:
            return type_string


class Stringifyable(ABC):

    def __str__(self):
        return _stringify(0, self)
