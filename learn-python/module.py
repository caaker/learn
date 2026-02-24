# module.py

# controls what is exported with -> from module import *
# without it, all modules with out an _ are imported
# only add is imported from below

__all__ = ["add"]

def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def _helper():
    return "internal use"