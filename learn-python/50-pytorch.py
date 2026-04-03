print('pytorch')
print('****************************************************************************************************')

# this operation takes about 2 seconds
import torch

# not all systems have accessible GPUs
# print(torch.cuda.is_available())

# tensors - add vectors
x = torch.tensor([1.0, 2.0, 3.0])
y = torch.tensor([4.0, 5.0, 6.0])
z = x + y

# z = tensor([5., 7., 9.])
print('z =', z)

# z = [5.0, 7.0, 9.0]
print('z =', z.tolist())

# tensors - zeros, ones, add matrices
a = torch.zeros((2, 2))
b = torch.ones((2, 2))
c = a + b

# c = [[1.0, 1.0], [1.0, 1.0]]
print('c =', c.tolist())