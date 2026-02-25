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
  print("Negative")