def positive_sum(arr):
    sum = 0
    for num in arr:
        if num >= 0:
            sum = num + sum

    return sum


positive_sum([1, 2, 3, 4, 5])
# 15
positive_sum([1, -2, 3, 4, 5])
# 13
positive_sum([-1, 2, 3, 4, -5])
# 9

# better answer
# def positive_sum(arr):
#     return sum(x for x in arr if x > 0)
