def round_sum(a, b, c):
    return round10(a) + round10(b) + round10(c)


def round10(n):
    if n % 10 >= 5:
        return n + (10 - n % 10)
    return n - (n % 10)
