def zeros(n):
    # Initialize result
    count = 0

    # Keep dividing n by
    # powers of 5 and
    # update Count
    i = 5
    while (n/i >= 1):
        count += int(n/i)
        i *= 5

    return int(count)

# Better Answer
# def zeros(n):
#   x = n/5
#   return x+zeros(x) if x else 0


print(zeros(0))
#  0, "Testing with n = 0"
print(zeros(6))
# 1, "Testing with n = 6"
print(zeros(30))
# 7, "Testing with n = 30"
