print('hashmap')
print('****************************************************************************************************')

# create
map1 = {
    'name': 'Joe',
    'age': 58
}

# read - Joe
print(map1['name'])

# update or add
map1['city'] = 'Austin'

# check key - True
print('age' in map1)

# iterate
for key, value in map1.items():
    print(key, value)
