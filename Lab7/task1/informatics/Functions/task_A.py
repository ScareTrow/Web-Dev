def min(a, b, c, d):
    m = a
    if m > b:
        m = b
    if m > c:
        m = c
    if m > d:
        m = d
    return m


arr = [int(x) for x in input().split()]
a = arr[0]
b = arr[1]
c = arr[2]
d = arr[3]
print(min(a, b, c, d))
