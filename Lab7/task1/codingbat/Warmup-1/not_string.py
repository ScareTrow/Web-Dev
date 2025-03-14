def not_string(str):
    if not str.startswith("not"):
        return "not " + str
    else:
        return str
