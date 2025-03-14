def cat_dog(str):
    cat = 0
    dog = 0
    for i in range(0, len(str) - 1):
        if str[i : i + 3] == "cat":
            cat += 1
        if str[i : i + 3] == "dog":
            dog += 1
    return cat == dog
