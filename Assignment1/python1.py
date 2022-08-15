def palin(num):
    temp = num
    rev = 0
    while(num > 0):
        dig = num % 10
        rev = rev * 10 + dig
        num = num // 10
    if(temp == rev):
        return 1
    else:
        return 0


num = int(input())
if(palin(num)):
    print("yes, the number is a palindrome")
else:
    print("the number is not a palindrome")