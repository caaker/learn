# there are 3 types of comments in python

#   type 1
''' type 2 '''
""" type 3 """

'''
style guide
https://google.github.io/styleguide/pyguide.html
'''
print("")
print("***************")
print("input & output")
print("***************")
print("")

# provides access to the file system among other things
import os

# user input
user = input("Enter your name: ")

# create two strings
word1 = 'Hello '
print (word1 + user + '.')

# list files in the current directory
files = os.listdir('.')
if files:
    print("In the current directory files[0] is: " + files[0])



print("")
print("***************")
print("types - common")
print("***************")
print("")

from collections.abc import Iterable

# an integer - <class 'int'>
i1 = 4
i2 = (4) # looks like tuple, but is an integer
print(type(i1))
print(type(i2))

# a float - <class 'float'>
f = 4.0
print(type(f))

# a string - <class 'str'>
s = 'test'
print(type(s))

# an boolean - <class 'bool'>
b = True
print(type(b))

# a complex number - <class 'complex'>
c = 1 + 2j
print(type(c))

print("")
print("***************")
print("types - composite")
print("***************")
print("")

# a tuple - <class 'tuple'>,
tuple1 = (4, 2)

# comma is required to make this a tuple, compare to above
tuple2 = (4, )
print(type(tuple1))
print(type(tuple2))

# a dynamic array - <class 'list'>
list1 = [0]
print(type(list1))

# a hash table - <class 'dict'>
dict1 = {'a': 0}
print(type(dict1))

# a set - <class 'set'>
set1 = {1, 2, 3}
print(type(set1))

# set along with many others is a child class of Iterable
print('Is set an iterable?', isinstance(set1, Iterable))

print("")
print("***************")
print("type - hints")
print("***************")
print("")

# some people might use type hints for static file checking, ie not run time.
def add(a: int, b: int) -> int:
    return a + b
result: int = add(2, 3)
print(result)
print("")
print("***************")
print("functions - default parameters")
print("***************")
print("")

# basic function definition
def print_hello(text):
  print(text)
print_hello("Hi")

# default parameter
def print_default(greeting = "Hello"):
  print(greeting)
print_default()

print("")
print("***************")
print("functions - special attributes")
print("***************")
print("")

# special attributes
def special(a = 1, b = 2):
    """I am a docstring """
    # print("__name__:", __name__)
    print(special.__doc__)
    print(special.__defaults__)
    # print(special.__code__)
special()


print("")
print("***************")
print("functions - lambda")
print("***************")
print("")


# input is s, return is capital s
simpleLambda = lambda s: s.upper()
print(simpleLambda('a'))


print("")
print("***************")
print("functions - embedded")
print("***************")
print("")


def function1():
  def f(x): return 2 * x
  print(f(2))
function1()

print("")
print("***************")
print("functions - args and kwargs")
print("***************")
print("")


# positional arguments must come before keyword arguments
def f(*args, **kwargs):
    print(args, kwargs)

# (1,2) {'y':4,'x':3}
f(1,2, y=4, x=3)
print("")
print("***************")
print("lists")
print("***************")
print("")

words = ['amelia', 'harper', 'evelyn', 'chris', 'james', 'brian']
words1 = words[:2]     # index 0 to 1
words2 = words[2:]     # index 2 to end
print(words)           # words has not changed
print(words1)
print(words2)

# common methods - append, pop
words.append('fabio')
print(words)
print(words.pop())
print(words)

# common methods - sort and sorted
# use sorted if you want to create a new list
words.sort()
print(words)

# common methods - remove
words.remove('amelia')
print(words)

# list comprehension
# [ <return> for <value> in <Iterable> ]
nums = [1, 2, 3, 4]
squares = [x**2 for x in nums]
# squares → [1, 4, 9, 16]

print("")
print("***************")
print("lists - generator objects")
print("***************")
print("")

# generate squares of numbers 1 to 5
# this is a generator expression
squares = (x**2 for x in range(1, 6))

# prints <generator object <genexpr> at 0x778a156d9e50>
print(squares)

# prints <class 'generator'>
print(type(squares))

# values are not computed until sum is executed
# this saves memory as compared to a list comprehension
print(sum(squares))print("")
print("***************")
print("strings")
print("***************")
print("")

# both functions are equivalent
upper1 = lambda string1: string1.upper()
def upper2(string1): return string1.upper()
print(upper1('A lambda function that makes uppercase strings'))

# a formatted or f string
name = "Joe"
age = 58
print(f"My name is {name} and I am {age} years old.")

# common string methods - upper, lower, capitalize
food = 'avocado'
print(food.upper())
print(food.lower())
print(food.capitalize())

# common string methods - split
a = "a, b, c"
b = a.split();
print(b)
c = a.replace("a", "z")
print(c)
print("")
print("***************")
print("controls - loops")
print("***************")
print("")

# prints 0, 1, 2, 3
numbers = [0, 1, 2, 3]
for number in numbers:
  print(number)

# prints 0, 1, 2, 3
# if we don't need the a, by convention we can replace it with _
for a in range(4):
  print(a)

# this is a nested list comprehension
# equivalent of an embedded for loop
# outer loop is - 'for row in matrix'
# inner loop is - 'for number in row'
matrix = [[0,1], [2,3]]
flat_list = [number for row in matrix for number in row]
print(flat_list)

# prints 0, 1, 2, 3
i = 0
while i <= 3:
  print(i)
  i += 1

# prints Positive
x = 10
if x > 0:
  print("Positive")
elif x == 0:
  print("Zero")
else:
  print("Negative")print("")
print("***************")
print("math")
print("***************")
print("")

import math
import random

# your favorite math method
print(math.sqrt(2))

# seeding will cause random.uniform to always produce the same value
random.seed(42)
print(random.uniform(-1,1))

# sums up an iterable with an optional default value
print(sum([1.5, 2.5], 1))
print(abs(-5))print("")
print("***************")
print("objects")
print("***************")
print("")

# len

# is checks if two names point to the same object in memory
dict1 = {'a': 0}
dict2 = dict1
dict3 = {'a': 0}

# prints True & False
print(dict1 is dict2)
print(dict1 is dict3)

#
# iterable objects - zip
#

# zip takes 2 or more iterables and produces a tuple
a = [1,2]
b = ['x','y']
test = zip(a,b)
# output is <zip object at 0x767ef7f77d80>
print(test)
# output is [(1,'x',True),(2,'y',False)]
print(list(test))

print("")
print("***************")
print("classes")
print("***************")
print("")


# python does not have access specifiers
class MySuperClass():

    def __init__(self):
        print("I'm a super class constructor")

    def superMethod(self):
        print("I'm a super class method")

# passing the super class in makes it so
class MyClass(MySuperClass):

    # self is required to instantiate
    def __init__(self):

        # calls constructor of the super class
        super().__init__()
        print("I'm a class constructor")

    def method(self):
        print("I'm a class method")

    def _private_method(self):
        print("This is intended to be a private method, but using an underscore is just convention")

Instance = MyClass()
Instance.method()
Instance.superMethod()
Instance._private_method()
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def add(self, other):
        return Point(self.x + other.x, self.y + other.y)

    def __add__(self, other):
        return Point(self.x + other.x, self.y + other.y)

# each calls the constructor __init__
p1 = Point(1, 2)
p2 = Point(3, 4)

# self = p1, other = p2
p3 = p1.add(p2)

# prints 4 and 6
print(p3.x, p3.y)  

# uses __add__
p4 = p1 + p2
print(p4.x, p4.y)
print("")
print("***************")
print("hashmaps")
print("***************")
print("")

# create
map1 = {
    "name": "Joe",
    "age": 58
}

# read
print(map1["name"])

# update or add
map1["city"] = "Austin"

# check key
print("age" in map1)

# iterate
for key, value in map1.items():
    print(key, value)# print("")
# print("***************")
# print("time")
# print("***************")
# print("")

import time
start = time.time()
time.sleep(1)
end = time.time()
print("total time:", end - start, "seconds")
import os
output_file = "combined.py"
with open(output_file, "w", encoding="utf-8") as outfile:
    for filename in sorted(os.listdir(".")):
        if os.path.isfile(filename) and filename != output_file:
            with open(filename, "r", encoding="utf-8") as infile:
                outfile.write(infile.read())

print("Done.")import numpy as np

# sudo apt install python3-numpy
# pip install numpy

# Two vectors
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

# Dot product, output is 32
dot = np.dot(a, b)
print(dot)print("")
print("***************")
print("linear algebra")
print("***************")
print("")

import numpy as np

# Matrix (2x3)
A = np.array([[1, 2, 3],
              [4, 5, 6]])

# Vector (length 3)
v = np.array([7, 8, 9])

# Matrix-vector multiplication
result = np.dot(A, v)
print(result)

'''
First row of A: [1, 2, 3]
Dot with v: 1*7 + 2*8 + 3*9 = 50

Second row of A: [4, 5, 6]
Dot with v: 4*7 + 5*8 + 6*9 = 122

So the result is: [50, 122]
'''print("")
print("***************")
print("pytorch")
print("***************")
print("")

# this operation takes about 2 seconds
import torch

# not all systems have accessible GPUs
# print(torch.cuda.is_available())

# tensors - add vectors
x = torch.tensor([1.0, 2.0, 3.0])
y = torch.tensor([4.0, 5.0, 6.0])
z = x + y
# z = tensor([5., 7., 9.])
print("z =", z)
# z = [5.0, 7.0, 9.0]
print("z =", z.tolist())

# tensors - zeros, ones, add matrices
a = torch.zeros((2, 2))
b = torch.ones((2, 2))
c = a + b
# c = [[1.0, 1.0], [1.0, 1.0]]
print("c =", c.tolist())
print("")
print("***************")
print("pytorch-backward-scalar")
print("***************")
print("")

import torch

x = torch.tensor(2.0, requires_grad=True)
y = x**2 + 3*x + 1
# dy/dx = 2*x + 3

# computes dy/dx and sets .grad for x
y.backward()

# prints 7.0
print("dy/dx =", x.grad)

# reset x.grad
x.grad.zero_()

# prints 7.0
print("dy/dx =", x.grad)
print("")
print("***************")
print("pytorch-backward-tensor")
print("***************")
print("")

import torch

# unpack this
v = torch.tensor([1.0, 2.0, 3.0], requires_grad=True)
f = v**2 + 3*v + 1
# df/dv = 2*v + 3

f_sum = f.sum()
print(f_sum)

f_sum.backward()

# output leaves off trailing 0 by default
# [5., 7., 9.]
print("df/dv =", v.grad)print("")
print("***************")
print("cirq")
print("***************")
print("")

import cirq

# place a single qbit named 'q' on a 1D line at index 0
qbit = cirq.LineQubit(0)

# creates a quantum circuit ( a series of quantum operations )
circuit = cirq.Circuit(

  # applies the Hadamard gate to the qbit
  # putting it into a superposition of |0> and |1>
  cirq.H(qbit),

  # measures qbit and and stores the result in a classical bit `q0`
  cirq.measure(qbit, key='q0')
)

# creates a classical simulator for quantum circuits so we can run the quantum circuit
sim = cirq.Simulator()

# executes the quantum circuit repetitively and stores the result
result = sim.run(circuit, repetitions=1024)

# 1 output is Counter({1: 537, 0: 487})
print(result.histogram(key='q0'))
# there are 3 types of comments in python

#   type 1
''' type 2 '''
""" type 3 """

'''
style guide
https://google.github.io/styleguide/pyguide.html
'''
print("")
print("***************")
print("input & output")
print("***************")
print("")

# provides access to the file system among other things
import os

# user input
user = input("Enter your name: ")

# create two strings
word1 = 'Hello '
print (word1 + user + '.')

# list files in the current directory
files = os.listdir('.')
if files:
    print("In the current directory files[0] is: " + files[0])



print("")
print("***************")
print("types - common")
print("***************")
print("")

from collections.abc import Iterable

# an integer - <class 'int'>
i1 = 4
i2 = (4) # looks like tuple, but is an integer
print(type(i1))
print(type(i2))

# a float - <class 'float'>
f = 4.0
print(type(f))

# a string - <class 'str'>
s = 'test'
print(type(s))

# an boolean - <class 'bool'>
b = True
print(type(b))

# a complex number - <class 'complex'>
c = 1 + 2j
print(type(c))

print("")
print("***************")
print("types - composite")
print("***************")
print("")

# a tuple - <class 'tuple'>,
tuple1 = (4, 2)

# comma is required to make this a tuple, compare to above
tuple2 = (4, )
print(type(tuple1))
print(type(tuple2))

# a dynamic array - <class 'list'>
list1 = [0]
print(type(list1))

# a hash table - <class 'dict'>
dict1 = {'a': 0}
print(type(dict1))

# a set - <class 'set'>
set1 = {1, 2, 3}
print(type(set1))

# set along with many others is a child class of Iterable
print('Is set an iterable?', isinstance(set1, Iterable))

print("")
print("***************")
print("type - hints")
print("***************")
print("")

# some people might use type hints for static file checking, ie not run time.
def add(a: int, b: int) -> int:
    return a + b
result: int = add(2, 3)
print(result)
print("")
print("***************")
print("functions - default parameters")
print("***************")
print("")

# basic function definition
def print_hello(text):
  print(text)
print_hello("Hi")

# default parameter
def print_default(greeting = "Hello"):
  print(greeting)
print_default()

print("")
print("***************")
print("functions - special attributes")
print("***************")
print("")

# special attributes
def special(a = 1, b = 2):
    """I am a docstring """
    # print("__name__:", __name__)
    print(special.__doc__)
    print(special.__defaults__)
    # print(special.__code__)
special()


print("")
print("***************")
print("functions - lambda")
print("***************")
print("")


# input is s, return is capital s
simpleLambda = lambda s: s.upper()
print(simpleLambda('a'))


print("")
print("***************")
print("functions - embedded")
print("***************")
print("")


def function1():
  def f(x): return 2 * x
  print(f(2))
function1()

print("")
print("***************")
print("functions - args and kwargs")
print("***************")
print("")


# positional arguments must come before keyword arguments
def f(*args, **kwargs):
    print(args, kwargs)

# (1,2) {'y':4,'x':3}
f(1,2, y=4, x=3)
print("")
print("***************")
print("lists")
print("***************")
print("")

words = ['amelia', 'harper', 'evelyn', 'chris', 'james', 'brian']
words1 = words[:2]     # index 0 to 1
words2 = words[2:]     # index 2 to end
print(words)           # words has not changed
print(words1)
print(words2)

# common methods - append, pop
words.append('fabio')
print(words)
print(words.pop())
print(words)

# common methods - sort and sorted
# use sorted if you want to create a new list
words.sort()
print(words)

# common methods - remove
words.remove('amelia')
print(words)

# list comprehension
# [ <return> for <value> in <Iterable> ]
nums = [1, 2, 3, 4]
squares = [x**2 for x in nums]
# squares → [1, 4, 9, 16]

print("")
print("***************")
print("lists - generator objects")
print("***************")
print("")

# generate squares of numbers 1 to 5
# this is a generator expression
squares = (x**2 for x in range(1, 6))

# prints <generator object <genexpr> at 0x778a156d9e50>
print(squares)

# prints <class 'generator'>
print(type(squares))

# values are not computed until sum is executed
# this saves memory as compared to a list comprehension
print(sum(squares))print("")
print("***************")
print("strings")
print("***************")
print("")

# both functions are equivalent
upper1 = lambda string1: string1.upper()
def upper2(string1): return string1.upper()
print(upper1('A lambda function that makes uppercase strings'))

# a formatted or f string
name = "Joe"
age = 58
print(f"My name is {name} and I am {age} years old.")

# common string methods - upper, lower, capitalize
food = 'avocado'
print(food.upper())
print(food.lower())
print(food.capitalize())

# common string methods - split
a = "a, b, c"
b = a.split();
print(b)
c = a.replace("a", "z")
print(c)
print("")
print("***************")
print("controls - loops")
print("***************")
print("")

# prints 0, 1, 2, 3
numbers = [0, 1, 2, 3]
for number in numbers:
  print(number)

# prints 0, 1, 2, 3
# if we don't need the a, by convention we can replace it with _
for a in range(4):
  print(a)

# this is a nested list comprehension
# equivalent of an embedded for loop
# outer loop is - 'for row in matrix'
# inner loop is - 'for number in row'
matrix = [[0,1], [2,3]]
flat_list = [number for row in matrix for number in row]
print(flat_list)

# prints 0, 1, 2, 3
i = 0
while i <= 3:
  print(i)
  i += 1

# prints Positive
x = 10
if x > 0:
  print("Positive")
elif x == 0:
  print("Zero")
else:
  print("Negative")print("")
print("***************")
print("math")
print("***************")
print("")

import math
import random

# your favorite math method
print(math.sqrt(2))

# seeding will cause random.uniform to always produce the same value
random.seed(42)
print(random.uniform(-1,1))

# sums up an iterable with an optional default value
print(sum([1.5, 2.5], 1))
print(abs(-5))print("")
print("***************")
print("objects")
print("***************")
print("")

# len

# is checks if two names point to the same object in memory
dict1 = {'a': 0}
dict2 = dict1
dict3 = {'a': 0}

# prints True & False
print(dict1 is dict2)
print(dict1 is dict3)

#
# iterable objects - zip
#

# zip takes 2 or more iterables and produces a tuple
a = [1,2]
b = ['x','y']
test = zip(a,b)
# output is <zip object at 0x767ef7f77d80>
print(test)
# output is [(1,'x',True),(2,'y',False)]
print(list(test))

print("")
print("***************")
print("classes")
print("***************")
print("")


# python does not have access specifiers
class MySuperClass():

    def __init__(self):
        print("I'm a super class constructor")

    def superMethod(self):
        print("I'm a super class method")

# passing the super class in makes it so
class MyClass(MySuperClass):

    # self is required to instantiate
    def __init__(self):

        # calls constructor of the super class
        super().__init__()
        print("I'm a class constructor")

    def method(self):
        print("I'm a class method")

    def _private_method(self):
        print("This is intended to be a private method, but using an underscore is just convention")

Instance = MyClass()
Instance.method()
Instance.superMethod()
Instance._private_method()
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def add(self, other):
        return Point(self.x + other.x, self.y + other.y)

    def __add__(self, other):
        return Point(self.x + other.x, self.y + other.y)

# each calls the constructor __init__
p1 = Point(1, 2)
p2 = Point(3, 4)

# self = p1, other = p2
p3 = p1.add(p2)

# prints 4 and 6
print(p3.x, p3.y)  

# uses __add__
p4 = p1 + p2
print(p4.x, p4.y)
print("")
print("***************")
print("hashmaps")
print("***************")
print("")

# create
map1 = {
    "name": "Joe",
    "age": 58
}

# read
print(map1["name"])

# update or add
map1["city"] = "Austin"

# check key
print("age" in map1)

# iterate
for key, value in map1.items():
    print(key, value)# print("")
# print("***************")
# print("time")
# print("***************")
# print("")

import time
start = time.time()
time.sleep(1)
end = time.time()
print("total time:", end - start, "seconds")
import os
output_file = "combined.txt"
with open(output_file, "w", encoding="utf-8") as outfile:
    for filename in sorted(os.listdir(".")):
        if os.path.isfile(filename) and filename != output_file:
            with open(filename, "r", encoding="utf-8") as infile:
                outfile.write(infile.read())

print("Done.")import numpy as np

# sudo apt install python3-numpy
# pip install numpy

# Two vectors
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

# Dot product, output is 32
dot = np.dot(a, b)
print(dot)print("")
print("***************")
print("linear algebra")
print("***************")
print("")

import numpy as np

# Matrix (2x3)
A = np.array([[1, 2, 3],
              [4, 5, 6]])

# Vector (length 3)
v = np.array([7, 8, 9])

# Matrix-vector multiplication
result = np.dot(A, v)
print(result)

'''
First row of A: [1, 2, 3]
Dot with v: 1*7 + 2*8 + 3*9 = 50

Second row of A: [4, 5, 6]
Dot with v: 4*7 + 5*8 + 6*9 = 122

So the result is: [50, 122]
'''print("")
print("***************")
print("pytorch")
print("***************")
print("")

# this operation takes about 2 seconds
import torch

# not all systems have accessible GPUs
# print(torch.cuda.is_available())

# tensors - add vectors
x = torch.tensor([1.0, 2.0, 3.0])
y = torch.tensor([4.0, 5.0, 6.0])
z = x + y
# z = tensor([5., 7., 9.])
print("z =", z)
# z = [5.0, 7.0, 9.0]
print("z =", z.tolist())

# tensors - zeros, ones, add matrices
a = torch.zeros((2, 2))
b = torch.ones((2, 2))
c = a + b
# c = [[1.0, 1.0], [1.0, 1.0]]
print("c =", c.tolist())
print("")
print("***************")
print("pytorch-backward-scalar")
print("***************")
print("")

import torch

x = torch.tensor(2.0, requires_grad=True)
y = x**2 + 3*x + 1
# dy/dx = 2*x + 3

# computes dy/dx and sets .grad for x
y.backward()

# prints 7.0
print("dy/dx =", x.grad)

# reset x.grad
x.grad.zero_()

# prints 7.0
print("dy/dx =", x.grad)
print("")
print("***************")
print("pytorch-backward-tensor")
print("***************")
print("")

import torch

# unpack this
v = torch.tensor([1.0, 2.0, 3.0], requires_grad=True)
f = v**2 + 3*v + 1
# df/dv = 2*v + 3

f_sum = f.sum()
print(f_sum)

f_sum.backward()

# output leaves off trailing 0 by default
# [5., 7., 9.]
print("df/dv =", v.grad)print("")
print("***************")
print("cirq")
print("***************")
print("")

import cirq

# place a single qbit named 'q' on a 1D line at index 0
qbit = cirq.LineQubit(0)

# creates a quantum circuit ( a series of quantum operations )
circuit = cirq.Circuit(

  # applies the Hadamard gate to the qbit
  # putting it into a superposition of |0> and |1>
  cirq.H(qbit),

  # measures qbit and and stores the result in a classical bit `q0`
  cirq.measure(qbit, key='q0')
)

# creates a classical simulator for quantum circuits so we can run the quantum circuit
sim = cirq.Simulator()

# executes the quantum circuit repetitively and stores the result
result = sim.run(circuit, repetitions=1024)

# 1 output is Counter({1: 537, 0: 487})
print(result.histogram(key='q0'))
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
    return "internal use"# module.py

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