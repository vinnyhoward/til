# Description:
# Encrypt this!

# You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

# Your message is a string containing space separated words.
# You need to encrypt each word in the message using the following rules:
# The first letter needs to be converted to its ASCII code.
# The second letter needs to be switched with the last letter
# Keepin' it simple: There are no special characters in input.
# Examples:


def encrypt_this(text):
    lst = text.split(' ')
    answer_lst = []

    for letter in lst:
        words = []
        convert = ''
        first_letter = ''
        last_letter = letter[-1]
        print(last_letter)
        for idx, x in enumerate(list(letter)):
            if idx == 0:
                convert = ord(list(letter)[idx])
                # words += str(convert)
            elif idx == 1:
                first_letter = list(letter)[idx]
                # print('last element:', list(letter)[-1])
            else:
                words += x
        # words.append(first_letter)
        # words.append(last_letter)
        # words.pop()
        answer_lst.append(words)

    print(answer_lst)


# print(encrypt_this("A in"))
print(encrypt_this("A wise old owl lived in an oak"))
# print(encrypt_this("The more he saw the less he spoke"))
# print(encrypt_this("The less he spoke the more he heard"))
# print(encrypt_this("Why can we not all be like that wise old bird"))
# print(encrypt_this("Thank you Piotr for all your help"))


# def encrypt_this(text):
#     lst = text.split(' ')
#     answer_lst = []

#     for letter in lst:
#         words = ''
#         if len(letter) <= 2:
#             for idx, x in enumerate(list(letter)):
#                 if idx == 0:
#                     convert = ord(list(letter)[idx])
#                     words += str(convert)
#                 else:
#                     words += x
#             answer_lst.append(words)

#         else:
#             for idx, x in enumerate(list(letter)):
#                 if idx == 0:
#                     convert = ord(list(letter)[idx])
#                     words += str(convert)
#                 elif idx == 1:
#                     first_temp = list(letter)[idx]


#                 else:
#                     words += x
#             answer_lst.append(words)

#     print(answer_lst)
