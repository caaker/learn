print('io')
print('****************************************************************************************************')

# provides access to the file system among other things
import os

# user input
user = input('Enter your name: ')

# create two strings
word1 = 'Hello '
print(f"{word1}{user}")

# list files in the current directory
files = os.listdir('.')
if files:
    print('In the current directory files[0] is: ' + files[0])
