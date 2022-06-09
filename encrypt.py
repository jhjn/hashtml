#!/usr/bin/env python3
# Simple cipher - Joe Jenne
# To encrypt my_secret.txt:
#     ./encrypt.py password < my_secret.txt 

import sys
import functools
from pathlib import Path

def encrypt(key: str, data: str) -> str:
    karr = bytearray(key, "utf-8")
    darr = bytearray(data, "utf-8")

    def _mush(val: int) -> int:
        return functools.reduce(lambda x, y: x^y, karr, val)

    return bytearray(map(_mush, darr)).hex()

if __name__ == "__main__":
    # Pass "$1" as key, pass STDIN as data.
    print(encrypt(sys.argv[1], sys.stdin.read()), end='')
