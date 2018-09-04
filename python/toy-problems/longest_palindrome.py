def longest_palindrome(s):
    palindrome = []
    longest = ''
    lst = list(s)

    for idx, x in enumerate(lst):

        for idy, y in enumerate(lst):
            if x == y and idx != idy:
                is_palindrome = ''.join(lst[idx:idy + 1])
                if is_palindrome == is_palindrome[::-1] and is_palindrome != '':
                    palindrome.append(is_palindrome)

                for word in palindrome:
                    if len(word) > len(longest):
                        longest = word

    if len(lst) == 0:
        return 0
    elif len(lst) == 1:
        return 1
    elif longest == '':
        return 1

    return len(longest)


print(longest_palindrome("a"))
print(longest_palindrome("aa"))
print(longest_palindrome("baa"))
print(longest_palindrome("aab"))
print(longest_palindrome("abcdefghba"))
print(longest_palindrome("baablkj12345432133d"))
print(longest_palindrome("I like racecars that go fast"))

# Loop through array to find first iteration of a letter
# Find the next iteration of the letter and push all letters from first iteration to last iteration
# Reverse said letters and compare to original value
# If true, assign value as longest value

# reitrate through entire string and do process again.
