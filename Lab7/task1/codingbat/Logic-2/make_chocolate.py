def make_chocolate(small, big, goal):
    big_bar = 5 * big

    if goal >= big_bar:
        remainder = goal - big_bar
    else:
        remainder = goal % 5

    if remainder <= small:
        return remainder

    return -1