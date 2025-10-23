from collections.abc import Iterable

print("")
print("***************")
print("types - common")
print("***************")
print("")

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
set1 = { 1, 2, 3 }
print(type(set1))


print("")
print("***************")
print("types - composite")
print("***************")
print("")

# all true
def compositeTypes():
  print(isinstance((1, 2, 'a', 'red'), tuple))
  print(isinstance([1, 2, 'a'], list))
  print(isinstance({1, 2}, set))
  print(isinstance({'a': 1, 'b': 2}, dict))
  print(isinstance([1, 2], Iterable))

compositeTypes()

print("")
print("***************")
print("types - common")
print("***************")
print("")

# all true
def types():
  print(isinstance(1, int))
  print(isinstance(1.0, float))
  print(isinstance(float("1.0"), float))
  print(isinstance(True, bool))
  print(isinstance("string", str))

types()

print("")
print("***************")
print("is")
print("***************")
print("")

dict1 = {'a': 0}
dict2 = dict1
dict3 = {'a': 0}

# prints True & False
print(dict1 is dict2)
print(dict1 is dict3)