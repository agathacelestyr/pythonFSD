def find(s, target, n):
    low = 0
    high = n-1
    while low <= high:
        mid = (low + high)//2
        if s[mid] == target:
            return mid
        elif s[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return high + 1


s = [1, 2, 3, 4, 5, 8]
target = 6
n = len(s)
print(find(s, target, n))
