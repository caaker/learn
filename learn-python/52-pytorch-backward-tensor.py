print('pytorch-backward-tensor')
print('****************************************************************************************************')

import torch
v = torch.tensor([1.0, 2.0, 3.0], requires_grad=True)
f = v**2 + 3*v + 1
# df/dv = 2*v + 3

# outpus is: 5 + 11 + 19 = 35
f_sum = f.sum()
print(f_sum)

# output leaves off trailing 0 by default - [5.0, 7.0, 9.0]
f_sum.backward()
print("df/dv =", v.grad)

