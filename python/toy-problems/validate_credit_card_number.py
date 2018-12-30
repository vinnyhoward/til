# Validate Credit Card Number

# In this Kata, you will implement the Luhn Algorithm, which is used to help validate credit card numbers.

# Given a positive integer of up to 16 digits, return true if it is a valid credit card number, and false if it is not.

# Here is the algorithm:

# Double every other digit, scanning from right to left, starting from the second digit (from the right).

# Another way to think about it is: if there are an even number of digits, double every other digit starting with the
# first; if there are an odd number of digits, double every other digit starting with the second:

# 1714 ==> [1*, 7, 1*, 4] ==> [2, 7, 2, 4]

# 12345 ==> [1, 2*, 3, 4*, 5] ==> [1, 4, 3, 8, 5]

# 891 ==> [8, 9*, 1] ==> [8, 18, 1]
# If a resulting number is greater than 9, replace it with the sum of its own digits (which is the same as subtracting 9
# from it):

# [8, 18*, 1] ==> [8, (1+8), 1] ==> [8, 9, 1]

# or:

# [8, 18*, 1] ==> [8, (18-9), 1] ==> [8, 9, 1]
# Sum all of the final digits:

# [8, 9, 1] ==> 8 + 9 + 1 = 18
# Finally, take that sum and divide it by 10. If the remainder equals zero, the original credit card number is valid.

# 18 (modulus) 10 ==> 8 , which is not equal to 0, so this is not a valid credit card number

# My horrible long answer


def validate(n):
    validLst = [int(i) for i in str(n)]
    newLst = []

    if len(validLst) % 2 == 0:
        for idx, even in enumerate(validLst):
            if idx % 2 == 0:
                even = even * 2
                if even > 9:
                    even = even - 9
                    newLst.append(even)
                else:
                    newLst.append(even)
            elif idx % 2 != 0:
                newLst.append(even)

    if len(validLst) % 2 != 0:
        for idy, odd in enumerate(validLst):
            if idy % 2 != 0:
                odd = odd * 2
                if odd > 9:
                    odd = odd - 9
                    newLst.append(odd)
                else:
                    newLst.append(odd)
            elif idy % 2 == 0:
                newLst.append(odd)

    return sum(newLst) % 10 == 0

# Better Answer from other posters


# def validate(n):
#     digits = [int(x) for x in str(n)]
#     for x in xrange(len(digits)-2, -1, -2):
#         digits[x] = sum(map(int, str(digits[x] * 2)))
#     return sum(digits) % 10 == 0


validate(123)
# # false
validate(1)
# # false
validate(2121)
# # true
validate(1230)
# # true
validate(1714)

validate(891)
