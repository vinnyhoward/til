# Complete The Pattern #7 - Cyclical Permutation

# You have to write a function pattern which creates the following pattern(See Examples) upto desired number of rows.

# If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.
# ###Examples:

# pattern(9):

# 123456789
# 234567891
# 345678912
# 456789123
# 567891234
# 678912345
# 789123456
# 891234567
# 912345678
# pattern(5):

# 12345
# 23451
# 34512
# 45123
# 51234


def pattern(n):
    pattern = []
    pattern_list = list(range(n + 1))
    pattern_list.pop(0)

    pattern.append(pattern_list)
    print(pattern)
    for i in range(n - 1):
        temp = pattern_list.pop(0)

        pattern_list.append(temp)
        pattern.append(pattern_list)

    print(pattern)


# pattern(1)
# "1"
pattern(4)
# "1234\n2341\n3412\n4123"
# pattern(0)
# ""
