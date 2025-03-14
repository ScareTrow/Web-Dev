def array_front9(nums):
    if len(nums) <= 4:
        return 9 in nums
    else:
        return 9 in nums[:4]
