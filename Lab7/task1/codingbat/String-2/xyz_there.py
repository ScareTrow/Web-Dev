def xyz_there(str):
    if str.startswith("xyz"):
        return True

    for i in range(len(str)):
        if str[i - 1] != "." and str[i : i + 3] == "xyz":
            return True
    return False
