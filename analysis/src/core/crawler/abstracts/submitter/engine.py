# Standard Library
from abc import ABC, abstractmethod
from functools import wraps
from sqlite3 import connect as sqlite_connection, Connection as SqliteConnection, Cursor as SqliteCursor
from typing import Optional, Callable, Union
from analysis.src.utils.string.stringify import Stringifyable

# Internal
from .query import Query

# Typings
Cursor = Union[SqliteCursor]


class SqlDataBaseEngine(ABC):

    __slots__ = '_uri', '_connection'

    def __init__(self, db_path: str):
        self._uri = db_path

    @abstractmethod
    def open_connection(self) -> None:
        pass

    @abstractmethod
    def close_connection(self) -> None:
        # Will always close self._connection and set self._connection to None
        pass

    @property
    def has_active_connection(self):
        return self._connection is not None

    @property
    @abstractmethod
    def connection(self):
        if not self.has_active_connection:
            self.open_connection()
        return self._connection

    @abstractmethod
    def execute(self, query: Query) -> None:
        pass

    @abstractmethod
    def execute_and_force_close(self, query: Query) -> None:
        pass

    @abstractmethod
    def force_open_and_execute(self, query: Query) -> None:
        pass

    @abstractmethod
    def force_execute(self, query: Query) -> None:
        pass

    @abstractmethod
    def commit(self) -> None:
        pass

    @property
    def uri(self) -> str:
        return self._uri

    def __str__(self) -> str:
        return f'{type(self).__name__}' \
               f'(uri: {self._uri}, ' \
               f'connection: {"alive" if self.has_active_connection else "dead"})'

    def __repr__(self):
        return self.__str__()


def force_connection_close(execution_function: Callable[[SqlDataBaseEngine, Query], Cursor]
                           ) -> Callable[[SqlDataBaseEngine, Query], Cursor]:
    @wraps(execution_function)
    def wrapper(engine: SqlDataBaseEngine, query: Query) -> Cursor:
        cursor = execution_function(engine, query)
        if engine.has_active_connection:
            engine.close_connection()
        return cursor
    return wrapper


def force_connection_open(execution_function: Callable[[SqlDataBaseEngine, Query], Cursor]
                          ) -> Callable[[SqlDataBaseEngine, Query], Cursor]:
    @wraps(execution_function)
    def wrapper(engine: SqlDataBaseEngine, query: Query) -> Cursor:
        engine.open_connection()
        return execution_function(engine, query)
    return wrapper


def force_connection(execution_function: Callable[[SqlDataBaseEngine, Query], Cursor]
                     ) -> Callable[[SqlDataBaseEngine, Query], Cursor]:
    @wraps(execution_function)
    def wrapper(engine: SqlDataBaseEngine, query: Query) -> Cursor:
        engine.open_connection()
        cursor = execution_function(engine, query)
        engine.close_connection()
        return cursor
    return wrapper


class SqliteEngine(SqlDataBaseEngine):

    def __init__(self, db_path: str):
        super().__init__(db_path)
        self._connection: Optional[SqliteConnection] = None

    def open_connection(self) -> None:
        if not self.has_active_connection:
            self._connection = sqlite_connection(self._uri)

    def close_connection(self) -> None:
        if self.has_active_connection:
            self._connection.close()
            self._connection = None

    @property
    def has_active_connection(self):
        return self._connection is not None

    @property
    def connection(self) -> SqliteConnection:
        if not self.has_active_connection:
            self.open_connection()
        return self._connection

    def execute(self, query: Query) -> Optional[Cursor]:
        if self.has_active_connection:
            return self._connection.execute(str(query))

    @force_connection_close
    def execute_and_force_close(self, query: Query) -> Optional[Cursor]:
        if self.has_active_connection:
            return self._connection.execute(str(query))

    @force_connection_open
    def force_open_and_execute(self, query: Query) -> Cursor:
        return self._connection.execute(str(query))

    @force_connection
    def force_execute(self, query: Query) -> Cursor:
        return self._connection.execute(str(query))

    def commit(self) -> None:
        if self.has_active_connection:
            self._connection.commit()

    @property
    def uri(self) -> str:
        return self._uri
