import numpy as n


def count_true(arr):
    return n.sum(arr)


arr = n.array([True, False, True])
print(count_true(arr))
