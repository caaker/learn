print("")
print("***************")
print("linear algebra")
print("***************")
print("")

# dot multiplication
# https://numpy.org/doc/stable/reference/generated/numpy.dot.html
# sudo apt install python3-numpy


import numpy as np

# Create a matrix
A = np.array([[4, 5, 6],
              [7, 8, 9]])

# Create a vector
B = np.array([1, 2, 3])

# Determine the dot product
C = np.dot(A, B)

# Print the result
print("Matrix A:")
print(A)
print("Vector B:")
print(B)
print("C = A dot B:")
print(C)
