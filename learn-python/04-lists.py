print('lists')
print('****************************************************************************************************')

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

# list comprehension - [ <return> for <value> in <Iterable> ]
nums = [1, 2, 3, 4]
squares = [x**2 for x in nums]
# squares → [1, 4, 9, 16]

#
# generator objects
#

# this is a generator expression; it generates squares of numbers 1 to 5
squares = (x**2 for x in range(1, 6))

# prints <generator object <genexpr> at 0x778a156d9e50>
print(squares)

# prints <class 'generator'>
print(type(squares))

# values are not computed until sum is executed
# this saves memory as compared to a list comprehension
print(sum(squares))
