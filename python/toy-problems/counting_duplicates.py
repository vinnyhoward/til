# Counting Duplicates

# Count the number of Duplicates
# Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

# Example
# "abcde" -> 0 # no characters repeats more than once
# "aabbcde" -> 2 # 'a' and 'b'
# "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
# "indivisibility" -> 1 # 'i' occurs six times
# "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
# "aA11" -> 2 # 'a' and '1'
# "ABBA" -> 2 # 'A' and 'B' each occur twice


def duplicate_count(text):
    lower_text = text.lower()
    dup_dict = []
    my_dict = {i: lower_text.count(i) for i in lower_text}
    for key, value in my_dict.items():
        if value > 1:
            dup_dict.append(value)

    return len(dup_dict)


duplicate_count("abcde")
# 0
duplicate_count("abcdea")
# 1
duplicate_count("indivisibility")
# 1
duplicate_count("aabBcde")


# def duplicate_count(s):
#   return len([c for c in set(s.lower()) if s.lower().count(c)>1])
