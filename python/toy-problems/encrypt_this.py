# Description:
# Encrypt this!

# You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

# Your message is a string containing space separated words.
# You need to encrypt each word in the message using the following rules:
# The first letter needs to be converted to its ASCII code.
# The second letter needs to be switched with the last letter
# Keepin' it simple: There are no special characters in input.
# Examples:

# My Answer


def encrypt_this(text):
    if text == "":
        return ""

    lst = text.split()
    answer_lst = []

    for letter in lst:
        words = []
        convert = ''
        first_letter = ''
        last_letter = letter[-1]

        if len(letter) <= 2:
            for idy, y in enumerate(list(letter)):
                if idy == 0:
                    convert = ord(list(letter)[idy])
                    words.append(str(convert))

                elif idy == 1:
                    words.append(y)
            answer_lst.append(words)

        elif len(letter) > 2:
            for idx, x in enumerate(list(letter)):

                if idx == 0:
                    convert = ord(list(letter)[idx])

                elif idx == 1:
                    first_letter = list(letter)[idx]
                    words.append(x)

                else:
                    words.append(x)

            if words:
                words[0] = last_letter
                words[-1] = first_letter
                words.insert(0, str(convert))

            answer_lst.append(words)

    return ' '.join(''.join(inner) for inner in answer_lst)


# Other Answers on CodeWars

# def swapper(w):
#     return w if len(w)<2 else w[-1] + w[1:-1] + w[0]

# def encrypt_this(s):
#     return ' '.join(w if not w else str(ord(w[0])) + swapper(w[1:]) for w in s.split())

# def encrypt_word(word):
#     result = list(word)
#     result[0] = str(ord(result[0]))
#     if len(word) > 1:
#         result[1], result[-1] = result[-1], result[1]
#     return "".join(result)

# def encrypt_this(text):
#     return " ".join(encrypt_word(word) for word in text.split())


print(encrypt_this("A in"))
print(encrypt_this("OVpbJrGHqVSJOYD oHknVDkkRYcbOil lSoYlEZU aBWEkYTBb JsSbXdQMgjkHima pPOHBjCiKnWXjHxqaVVQ VF  IbcyEhncDoy hvaMAvDaJXgodDS fRZmbVz UTlMzuATKiXf UIYFhgGVDYlSAJSK jE NK"))
print(encrypt_this("A wise old owl lived in an oak"))
print(encrypt_this("The more he saw the less he spoke"))
print(encrypt_this("The less he spoke the more he heard"))
print(encrypt_this("Why can we not all be like that wise old bird"))
print(encrypt_this("Thank you Piotr for all your help"))
