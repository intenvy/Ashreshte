from abc import ABC


class ClientException(Exception, ABC):

    __slots__ = 'message',

    def __init__(self, message: str):
        super().__init__(message)

    def __str__(self):
        return f'{type(self).__name__}({self.message})'


class BadRequestException(Exception):

    def __init__(self, message: str):
        super().__init__(message)


class NotFoundException(Exception):

    def __init__(self, message: str):
        super().__init__(message)
