import math


def count_divisors(number):
    count = 0
    sqrt_x = int(math.sqrt(number))
    for i in range(1, sqrt_x + 1):
        if number % i == 0:
            count += 2
    if sqrt_x * sqrt_x == number:
        count -= 1
    return count


x = int(input())
print(count_divisors(x))
