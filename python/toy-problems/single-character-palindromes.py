# You will be given a string and you task is to check if it is possible to convert that string into a palindrome by
# removing a single character. If the string is already a palindrome, return "OK". If it is not, and we can convert it to
# a palindrome by removing one character, then return "remove one", otherwise return "not possible". The order of the
# characters should not be changed.

# For example:

# solve("abba") = "OK". -- This is a palindrome
# solve("abbaa") = "remove one". -- remove the 'a' at the extreme right.
# solve("abbaab") = "not possible".

# More examples in the test cases.

# Good luck!

# My Answer


def solve(s):
    count = 0
    check = []
    split_s = list(s)

    if split_s == split_s[::-1]:
        return 'OK'
    elif split_s != split_s[::-1]:
        for x in range(0, len(split_s)):
            removed_el = split_s.pop(count)
            if split_s == split_s[::-1]:
                return "remove one"
            split_s.insert(count, removed_el)
            count += 1

    return "not possible"

# Better Answer

# def solve(s):
#     isOK = lambda x: x == x[::-1]

#     return ("OK" if isOK(s)  else
#             "remove one" if any( isOK(s[:i]+s[i+1:]) for i in range(len(s)) ) else
#             "not possible")


print(solve("abba"))
# "OK"
print(solve("abbaa"))
# "remove one"
print(solve("abbaab"))
# "not possible"
print(solve("madmam"))
# "remove one"
print(solve("raydarm"))
# "not possible"
print(solve("hannah"))
# "OK"
print(solve("abcbad"))
# 'remove one'
