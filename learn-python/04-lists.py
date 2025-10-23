print("")
print("***************")
print("lists")
print("***************")
print("")

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# 1 to 10
for number in numbers:
    print(number)

# 1 to 5
numbers = numbers[:5]

for number in numbers:
    print(number)

def lists():
  words = ['amelia', 'harper', 'evelyn', 'chris', 'james', 'brian']
  words1 = words[:2]     # index 0 to 1
  words2 = words[2:]     # index 2 to end
  print(words)           # words has not changed
  print(words1)
  print(words2)

lists()