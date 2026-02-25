print("")
print("***************")
print("lists")
print("***************")
print("")

# a list of numbers
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# print 1 to 10
for number in numbers:
  print(number)

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

