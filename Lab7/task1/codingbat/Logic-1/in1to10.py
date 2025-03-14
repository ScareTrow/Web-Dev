def in1to10(n, outside_mode):
    if outside_mode:
        return n <= 1 or n >= 10
    return 1 <= n <= 10
