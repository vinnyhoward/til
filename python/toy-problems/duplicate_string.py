# Your task is to remove all duplicate words from string, leaving only single words entries.
# Example: Input: 'alpha beta beta
# gamma gamma gamma delta alpha beta beta gamma gamma gamma delta' Output: 'alpha beta gamma delta'


def remove_duplicate_words(s):
    word = s.split()
    result = []
    for item in word:
        if item not in result:
            result.append(item)
    return ' '.join(result)


remove_duplicate_words(
    "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta")

# Better version

# def remove_duplicate_words(s):
#     return ' '.join(dict.fromkeys(s.split()))
