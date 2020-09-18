
class Query:

    __slots__ = 'query_script',

    def __init__(self, script: str):
        self.query_script = script

    def __str__(self):
        return self.query_script

    def __repr__(self):
        return f'Query({self.__str__()})'
