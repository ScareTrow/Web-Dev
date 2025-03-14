def centered_average(nums):
    nums.sort()
    li = nums[1:-1]
    return sum(li) // len(li)
