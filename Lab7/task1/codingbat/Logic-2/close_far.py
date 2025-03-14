def close_far(a, b, c):
    if abs(a - b) <= 1:
        if abs(a - c) >= 2 and abs(b - c) >= 2:
            return True

    if abs(a - c) <= 1:
        if abs(a - b) >= 2 and abs(b - c) >= 2:
            return True

    return False
