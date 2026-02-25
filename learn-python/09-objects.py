print("")
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

