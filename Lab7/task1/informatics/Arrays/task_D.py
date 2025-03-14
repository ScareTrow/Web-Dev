n = int(input())
a = list(map(int, input().split()))

cnt = 0
for i in range(n):
    if i > 0:
        if a[i - 1] < a[i]:
            cnt += 1
print(cnt)
