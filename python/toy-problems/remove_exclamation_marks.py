# Remove exclamation marks

# Write function RemoveExclamationMarks which removes all exclamation marks from a given string.


def remove_exclamation_marks(s):
    newSentence = []
    splitSentence = list(s)

    for letter in splitSentence:
        if letter != '!':
            newSentence.append(letter)

    return "".join(newSentence)


remove_exclamation_marks("Hello World!!!")
