# Let's create some scrolling text!

# Your task is to complete the function which takes a string, and returns an array with all 
# possible rotations of the given string, in uppercase.

# Example
# scrollingText("codewars") should return:

# [ "CODEWARS",
#   "ODEWARSC",
#   "DEWARSCO",
#   "EWARSCOD",
#   "WARSCODE",
#   "ARSCODEW"
#   "RSCODEWA",
#   "SCODEWAR" ]

# My embarassing ass answer
def scrolling_text(text):
    new_list = []
    new_list.append(text.upper())

    temp_list = text[:1]
    second_list = text[1:]

    new_word = second_list + temp_list
    new_list.append(new_word.upper())
    for x in text:
        if new_word != text:
            temp_list = new_word[:1]
            second_list = new_word[1:]

            new_word = second_list + temp_list
            new_list.append(new_word.upper())

    return new_list[:-1]


scrolling_text("abcd")

# Better answer (Lol I'm retarded)
# def scrolling_text(text):
#     text = text.upper()
#     return [ text[i:] + text[:i] for i in range(len(text)) ]