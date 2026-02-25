print("")
print("***************")
print("input & output")
print("***************")
print("")

# provides access to the file system among other things
# the as o part is optional
import os as o

# gather user input
user = input("Enter your name: ")

# create two strings
word1 = 'Hello '
print (word1 + user)

# list files in the current directory
files = o.listdir('.')
if files:
    print("In the current directory files[0] is: " + files[0])



