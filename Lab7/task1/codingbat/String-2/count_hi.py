def count_hi(str):
    sum = 0
    for i in range(len(str) - 1):
        if str[i : i + 2] == "hi":
            sum += 1
    return sum
