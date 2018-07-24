# Is Prime
# Define a function isPrime/is_prime() that takes one integer argument and returns
# true/True or false/False depending on if the integer is a prime.

# Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive
# divisors other than 1 and itself.

# Example
# bool isPrime(5) = return true
# Assumptions
# You can assume you will be given an integer input.
# You can not assume that the integer will be only positive. You may be given negative numbers as
# well (or 0).


def is_prime(num):
    if num > 1:
        for i in range(2, num):
            if (num % i) == 0:
                return False
                break
        else:
            return True
    else:
        return False


# is_prime(0)
# False
is_prime(0)
# False
# is_prime(0)
# True

# Better Answer

# def is_prime(num):
#     return num > 1 and not any(num % n == 0 for n in range(2,num))
