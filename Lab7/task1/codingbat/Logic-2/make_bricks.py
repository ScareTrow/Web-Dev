def make_bricks(small, big, goal):
    if goal >= big * 5:
        remainder = goal - (big * 5)
    else:
        remainder = goal % 5

    if small >= remainder:
        return True

    return False
