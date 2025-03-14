a = int(input())
res = ""
for x in range(1, a + 1):
    if a % x == 0:
        res += str(x) + " "
print(res)
