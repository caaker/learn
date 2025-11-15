print("")
print("***************")
print("pytorch-backward-scalar")
print("***************")
print("")

import torch

x = torch.tensor(2.0, requires_grad=True)
y = x**2 + 3*x + 1
# dy/dx = 2*x + 3

# computes dy/dx and sets .grad for x
y.backward()

# prints 7.0
print("dy/dx =", x.grad)

# reset x.grad
x.grad.zero_()