#!/usr/bin/env python3
# Simple cipher - Joe Jenne
# To decrypt my_secret.txt:
#     ./decrypt.py password < my_secret.txt 

import re
import sys
import functools
from pathlib import Path

def decrypt(key: str, data: str) -> str:
    karr = bytearray(key, "utf-8")
    darr = bytearray([int(b, 16) for b in re.findall(".{1,2}", data)])

    def _mush(val: int) -> int:
        return functools.reduce(lambda x, y: x^y, karr, val)

    return str(bytearray(map(_mush, darr)), encoding="utf-8")

if __name__ == "__main__":
    # Pass "$1" as key, pass STDIN as data.
    print(decrypt(sys.argv[1], sys.stdin.read()), end='')
