n = int(input())
res = 0
a = list(map(int, input().split()))
max = a[0]
for i in range(1, n - 1):
    if a[i - 1] < a[i] and a[i + 1] < a[i]:
        res += 1
print(res)
