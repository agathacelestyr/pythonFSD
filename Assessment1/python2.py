max = 2147483647
min = -2147483648
def reverse(num):
    n_flag = False
    if num < 0:
        n_flag = True
        num = -num
    prev = 0
    rev = 0
    while(num != 0):
        current = num % 10
        rev = (rev * 10) + current
        if(rev >= max or rev <= min):
            rev = 0
        if((rev - current) // 10 != prev):
            return 0
        prev = rev
        num = num // 10
    return -rev if(n_flag == True) else rev


num = int(input())
print(reverse(num))