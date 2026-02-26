print('pytorch-backward-tensor')
print('****************************************************************************************************')

import torch

# unpack this
v = torch.tensor([1.0, 2.0, 3.0], requires_grad=True)
f = v**2 + 3*v + 1
# df/dv = 2*v + 3

f_sum = f.sum()
print(f_sum)

f_sum.backward()

# output leaves off trailing 0 by default
# [5., 7., 9.]
print("df/dv =", v.grad)
