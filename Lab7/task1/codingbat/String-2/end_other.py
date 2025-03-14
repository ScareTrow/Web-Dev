def end_other(a, b):
    a = a.lower()
    b = b.lower()
    a1 = len(a)
    b1 = len(b)

    if a1 == b1 and a == b:
        return True
    elif a1 > b1:
        return a.endswith(b)
    else:
        return b.endswith(a)
