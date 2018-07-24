# Your task is to write function findSum.

# Upto and including n, this function will return the sum of all multiples of 3 and 5.

# For example:

# findSum(5) should return 8 (3 + 5)

# findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

def find(n):
    sum_list = []
    starting = 0
    while starting <= n:
        if starting % 3 == 0 or starting % 5 == 0:
            sum_list.append(starting)
        elif starting % 5 == 0:
            sum_list.append(starting)
        starting += 1
    return sum(sum_list)

find(10)