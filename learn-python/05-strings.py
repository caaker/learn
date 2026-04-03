print('strings')
print('****************************************************************************************************')

# both functions are equivalent
upper1 = lambda string1: string1.upper()
def upper2(string1): return string1.upper()
print(upper1('A lambda function that makes uppercase strings'))

# a formatted or f string
name = 'Joe'
age = 58
print(f'My name is {name} and I am {age} years old.')

# common string methods - upper, lower, capitalize
food = 'avocado'
print(food.upper())
print(food.lower())
print(food.capitalize())

# common string methods - split
a = 'a, b, c'
b = a.split();

# ['a', 'b', 'c']
print(b)
c = a.replace('a', 'z')

# z, b, c
print(c)
