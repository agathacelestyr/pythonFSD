def sum(nums, target):
    for i in range(len(nums)):
        for j in range(i+1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]


nums = []
num = input().split()
for x in num:
    nums.append(int(x))
target = int(input())
print(sum(nums, target))
