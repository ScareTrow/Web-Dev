def xor(x, y):
    if x == 1 and y == 0:
        return 1
    if x == 0 and y == 1:
        return 1
    return 0


arr = [int(x) for x in input().split()]
a = arr[0]
b = arr[1]
print(xor(a, b))
