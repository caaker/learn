print('math')
print('****************************************************************************************************')

import math
import random

# your favorite math method
print(math.sqrt(2))

# seeding will cause random.uniform to always produce the same value
random.seed(42)
print(random.uniform(-1,1))

# sums up an iterable with an optional default value
print(sum([1.5, 2.5], 1))
print(abs(-5))
