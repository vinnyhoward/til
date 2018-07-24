#  The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm
# achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately
# upon stretching to full height, the spectator returns to the usual seated position. The result is a wave of standing spectators
# that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas
# the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously
# around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When
# the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any
# given time in an arena, although simultaneous, counter-rotating waves have been produced. (Source Wikipedia)

# In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string
# and you must return that string in an array where an uppercase letter is a person standing up.

# Rules
#  1. The input string will always be lower case but maybe empty.
#  2. If the character in the string is whitespace then pass
#   over it as if it was an empty seat.

# Example
# wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]


def wave(str):
    new_str = str
    temp_letter = ''
    temp_i = ''
    answer_list = []
    temp_enum_first = 0
    temp_enum_last = 1
    for i, val in enumerate(new_str):
        if ' ' in val:
            val = ' '
            temp_i = i
            last_half = str[temp_enum_last:]
            first_half = str[0:temp_enum_first]
            new_str = first_half + str[i].upper() + last_half
            temp_enum_first = temp_enum_first + 1
            temp_enum_last = temp_enum_last + 1
            pass
        if val != temp_letter:
            if val.upper() != val and i != temp_i:
                val = val.upper()
                temp_i = i
                last_half = str[temp_enum_last:]
                first_half = str[0:temp_enum_first]
                new_str = first_half + str[i].upper() + last_half
                temp_enum_first = temp_enum_first + 1
                temp_enum_last = temp_enum_last + 1
                answer_list.append(new_str)

    return answer_list


wave("h ell o")

# Lmfao wow, this answer is way better. I am retarded

# def wave(str):
#     return [str[:i] + str[i].upper() + str[i+1:] for i in range(len(str)) if str[i].isalpha()]
