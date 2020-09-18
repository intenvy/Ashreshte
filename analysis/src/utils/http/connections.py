# Standard Library
from subprocess import Popen, PIPE
from typing import Tuple
from re import compile as pattern


def ping(host: str) -> Tuple[int, int, int]:
    cmd = Popen(['ping', host], stdout=PIPE, stderr=PIPE)
    out, error = cmd.communicate()
    out = out.decode('utf-8')
    error = error.decode('utf-8')
    matcher = pattern(r'Minimum = (\d+)ms, Maximum = (\d+)ms, Average = (\d+)ms').search(out)
    return int(matcher.group(1)), int(matcher.group(2)), int(matcher.group(3))
