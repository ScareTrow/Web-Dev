def power(a, n):
    res = 1
    for i in range(1, n + 1):
        res *= a
    return res


arr = [float(x) for x in input().split()]
a = float(arr[0])
b = int(arr[1])

print(power(a, b))
