n = int(input())
res = False
a = list(map(int, input().split()))
max = a[0]
for i in range(1, n):
    if (a[i] > 0 and a[i - 1] > 0) or (a[i] < 0 and a[i - 1] < 0):
        res = True

if res:
    print("YES")
else:
    print("NO")
