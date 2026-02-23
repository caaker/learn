print("")
print("***************")
print("strings")
print("***************")
print("")

# both functions are equivalent
upper1 = lambda string1: string1.upper()
def upper2(string1): return string1.upper()
print(upper1('A lambda function that makes uppercase strings'))

name = "Joe"
age = 58
print(f"My name is {name} and I am {age} years old.")