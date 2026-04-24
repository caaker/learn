print('pytorch-backward-tensor')
print('****************************************************************************************************')

import torch
v = torch.tensor([1.0, 2.0, 3.0], requires_grad=True)
f = v**2 + 3*v + 1
# df/dv = 2*v + 3

# outpus is 5 + 11 + 19 = 35 : tensor(35. grad_fn=<SumBackwarr0>)
f_sum = f.sum()
print(f_sum)

# output is: tensor([5., 7., 9.])
f_sum.backward()
print("df/dv =", v.grad)

