#
# generator objects
#

# generator expressions save memory when you pass them to some functions such as sum()
# the case below does not save memory

# generate squares of numbers 1 to 5
squares = (x**2 for x in range(1, 6))

# prints <generator object <genexpr> at 0x778a156d9e50>
print(squares)

# prints <class 'generator'>
print(type(squares))

# values are not computed until sum is executed
# this saves memory as compared to a list comprehension
print(sum(squares))