def sum67(nums):
    total = 0
    is6 = False

    for i in range(len(nums)):
        if nums[i] == 6:
            is6 = True
        if not is6:
            total += nums[i]
        if nums[i] == 7 and is6:
            is6 = False
    return total
