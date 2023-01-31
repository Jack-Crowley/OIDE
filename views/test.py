# import random
# x = 1
# z = 'asdf'
# yes = True

# arr = [1,2,3]

# for i in range(10):
#     print(i)

import sys

sys.path.append('..')
from autocomplete.gpt2_coder import GPT2Coder

m = GPT2Coder("shibing624/code-autocomplete-gpt2-base")
number = 12
# number = 12; nu
print(m.generate('number = 12; nu'))
