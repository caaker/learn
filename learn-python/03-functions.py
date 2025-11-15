print("")
print("***************")
print("functions - default parameters")
print("***************")
print("")

# basic function definition
def print_hello(text):
  print(text)
print_hello("Hi")

# default parameter
def print_default(greeting = "Hello"):
  print(greeting)
print_default()

print("")
print("***************")
print("functions - special attributes")
print("***************")
print("")

# special attributes
def showSpecialAttributes(a = 1, b = 2):
    """I am a docstring """
    # print("__name__:", __name__)
    print(showSpecialAttributes.__doc__)
    print(showSpecialAttributes.__defaults__)
    # print(showSpecialAttributes.__code__)
showSpecialAttributes()


print("")
print("***************")
print("functions - lambda")
print("***************")
print("")


# input is s, return is s
simpleLambda = lambda s: s
print(simpleLambda('a'))


print("")
print("***************")
print("functions - embedded")
print("***************")
print("")


def function1():
  def f(x): return 2 * x
  print(f(2))
function1()