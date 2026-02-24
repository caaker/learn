print("")
print("***************")
print("hashmaps")
print("***************")
print("")

# create
map1 = {
    "name": "Joe",
    "age": 58
}

# read
print(map1["name"])

# update or add
map1["city"] = "Austin"

# check key
print("age" in map1)

# iterate
for key, value in map1.items():
    print(key, value)