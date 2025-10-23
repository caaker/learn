print("")
print("***************")
print("strings")
print("***************")
print("")

# both functions are equivalent
def strings():
  upper = lambda string1: string1.upper()
  # def upper(string1): return string1.upper()
  print(upper('A lambda function that makes uppercase strings'))

strings()