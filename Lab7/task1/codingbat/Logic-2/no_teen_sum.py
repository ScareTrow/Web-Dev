def no_teen_sum(a, b, c):

    def fix_teen(n):
        if 13 <= n <= 19 and n != 15 and n != 16:
            return 0

        return n

    return fix_teen(a) + fix_teen(b) + fix_teen(c)
