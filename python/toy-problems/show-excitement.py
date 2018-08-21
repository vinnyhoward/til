# Write a function called "show_excitement" where the string
# "I am super excited for this course!" is returned exactly
# 5 times, where each sentence is separated by a single space.
# Return the string with "return".
# You can only have the string once in your code.
# Don't just copy/paste it 5 times into a single variable!


# def show_excitement():

#     for x in range(5):
#         return "I am super excited for this course! "


# print(show_excitement())

def show_excitement():
    ans_arr = []
    i = 0
    while i < 5:
        i += 1
        ans_arr.append("I am super excited for this course!")
    return ' '.join(str(x) for x in ans_arr)


print(show_excitement())
