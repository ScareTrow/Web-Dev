def common_end(a, b):
    return len(a) and len(b) >= 1 and a == b or a[0] == b[0] or a[-1] == b[-1]
