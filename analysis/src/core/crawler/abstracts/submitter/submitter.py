# Standard Library
from threading import Lock

# Internal
from analysis.src.utils.structures.stack import ModelStack
from .engine import *
from .query import Query


class DataSubmitter(ABC):

    __slots__ = '_engine', '_insert_query_builder'

    def __init__(self, engine: SqlDataBaseEngine, insert_query_builder: Callable[[str, ModelStack], Query],
                 establish_connection: bool = False):
        self._engine: SqlDataBaseEngine = engine
        self._insert_query_builder = insert_query_builder
        if establish_connection:
            self.connect()

    def __str__(self):
        return f'[DataSubmitter] {self._engine}'

    def _submit(self, stack: ModelStack, table: str, keep_alive: bool = True) -> None:
        # Cursor and connection are always alive
        # So it simply executes queries with the cursor
        query = self._insert_query_builder(table, stack)
        self._engine.force_open_and_execute(query)
        if not keep_alive:
            self.disconnect()

    def submit(self, stack: ModelStack, table: str, commit: bool = True, keep_alive: bool = True) -> None:
        # Submits data to database
        self._submit(stack, table, keep_alive)
        if commit:
            self._engine.commit()

    def connect(self) -> None:
        self._engine.open_connection()

    def disconnect(self) -> None:
        self._engine.close_connection()

    def commit(self):
        self._engine.commit()


def _sqlite_insert_query_builder(table: str, stack: ModelStack) -> Query:
    """
    Sample SQLite Insert Query:
        INSERT INTO table (column1, column2,..)
        VALUES
        (value_1, value_2,...),
        (value_1, value_2,...);
    """
    script = 'INSERT INTO ' + f'"{table}"' + stack.get_sql_columns() + ' VALUES '\
             + stack.get_sql_values() + ';'
    return Query(script)


class SqliteDataSubmitter(DataSubmitter, ABC):

    __slots__ = '_connection', '_cursor', '_lock'

    def __init__(self, db: Union[str, SqlDataBaseEngine], establish_connection: bool = False):
        if isinstance(db, str):
            super().__init__(SqliteEngine(db), _sqlite_insert_query_builder, establish_connection)
        elif isinstance(db, SqlDataBaseEngine):
            super().__init__(db, _sqlite_insert_query_builder, establish_connection)
        else:
            raise ValueError(f'Passed parameter "db" must be str / SqlDataBaseEngine but is {type(db)}')
        self._lock = Lock()

    def submit(self, stack: ModelStack, table: str, commit: bool = True, keep_alive: bool = True) -> None:
        # Submits data to database
        with self._lock as lock:
            super().submit(stack, table, commit, keep_alive)
