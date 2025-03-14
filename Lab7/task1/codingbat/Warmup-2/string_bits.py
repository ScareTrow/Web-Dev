def string_bits(str):
    result = ""
    for i in range(len(str)):
        if i % 2 == 0:
            result += str[i]
    return result
