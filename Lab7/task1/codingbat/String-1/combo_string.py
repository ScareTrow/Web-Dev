def combo_string(a, b):
    if len(a) > len(b):
        return b + a + b
    else:
        return a + b + a
