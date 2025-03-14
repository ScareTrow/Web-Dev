import math
a = int(input())
b = int(input())
res = ""
for i in range(a, b+1):
    if i % math.sqrt(i) == 0:
        res += str(i) + " "
print(res)