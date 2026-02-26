print('numpy-matrix')
print('****************************************************************************************************')

import numpy as np

# Matrix (2x3)
A = np.array([[1, 2, 3],
              [4, 5, 6]])

# Vector (length 3)
v = np.array([7, 8, 9])

# Matrix-vector multiplication
result = np.dot(A, v)
print(result)

'''
First row of A: [1, 2, 3]
Dot with v: 1*7 + 2*8 + 3*9 = 50

Second row of A: [4, 5, 6]
Dot with v: 4*7 + 5*8 + 6*9 = 122

So the result is: [50, 122]
'''