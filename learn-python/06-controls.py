print("")
print("***************")
print("controls - loops")
print("***************")
print("")

numbers = [0, 1, 2, 3]

# prints 0, 1, 2, 3
for number in numbers:
  print(number)

# prints 0, 1, 2, 3
# if we don't need the a, by convention we can replace it with _
for a in range(4):
  print(a)

act = sum((wi*xi for wi,xi in zip(self.w, x)), self.b)

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

