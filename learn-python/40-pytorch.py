print("")
print("***************")
print("pytorch")
print("***************")
print("")

# this operation takes about 2 seconds
import torch

# not all systems have accessible GPUs
# print(torch.cuda.is_available())

# tensors
x = torch.tensor([1.0, 2.0, 3.0])
y = torch.tensor([4.0, 5.0, 6.0])
z = x + y
print("z =", z.tolist())

# tensors - zeros, ones
a = torch.zeros((2, 2))
b = torch.ones((2, 2))
c = a + b

print("c =", c.tolist())
