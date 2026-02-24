print("")
print("***************")
print("objects")
print("***************")
print("")

#
# iterable objects - zip
#

# zip takes 2 or more iterables and produces a tuple
a = [1,2]
b = ['x','y']
c = [True, False]
test = zip(a,b,c)
# output is <zip object at 0x767ef7f77d80>
print(test)
# output is [(1,'x',True),(2,'y',False)]
print(list(test))

#
# generator objects
#

# generator expressions save memory when you pass them to some functions such as sum()
# the case below does not save memory

# generate squares of numbers 1 to 5
squares = (x**2 for x in range(1, 6))

# prints <class 'generator'>
print(type(squares))

# prints 1, 4, 9, 16, 25
for sq in squares:
    print(sq)