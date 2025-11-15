print("")
print("***************")
print("pytorch-backward-tensor")
print("***************")
print("")

import torch

# unpack this
v = torch.tensor([1.0, 2.0, 3.0], requires_grad=True)
f = v**2 + 3*v + 1

# f_sum is 29, it inputs each value from the tensor into f and then sums all of them
# summing is required heer or an error is thrown
f_sum = f.sum()

f_sum.backward()

# output leaves off trailing 0 by default
# [5., 7., 9.]
print("df/dv =", v.grad)