# this only effects the wild card import - from module import *
__all__ = ["add"]

def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

# using undersocre is only convention but the function is still imported
def _multiply(a, b):
    return a * b