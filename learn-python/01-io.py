print("")
print("***************")
print("input & output")
print("***************")
print("")

# provides access to the file system among other things
# the as o part is optional
import os as o

# gather user input
user = input()

# create two strings
word1 = 'Hello '
word2 = "World."

# list files in the current directory
files = o.listdir('.')
if files:
    print(word1 + word2 +" The first file in your directory is: " + files[0])
if user:
    print("The user input is: " + user)


