# Searches and sorts can be very hard to visualize and understand. If you need, go through the video a few more times until
# it really sinks in.
#
# Here is a supplementary visualization that might help as well! Python lists have a method called index(),
# which just does a search and returns the first index with an instance of that value. Next, you're going to write a binary
# search function that has the same result, but searches faster. Keep in mind the constraint for this exercise—for binary search,
# elements need to be in increasing order.

# You're going to write a binary search function.
# You should use an iterative approach - meaning
# using loops.
# Your function should take two inputs:
# a Python list to search through, and the value
# you're searching for.
# Assume the list only has distinct elements,
# meaning there are no repeated values, and
# elements are in a strictly increasing order.
# Return the index of value, or -1 if the value
# doesn't exist in the list.


def binary_search(input_array, value):
    half_list = len(input_array)
    mid_num = 0
    if half_list % 2 != 0:
        mid_num = int(half_list / 2)
        if input_array[mid_num] < value:
            half_list = input_array[int(len(input_array) / 2) + 1:]
            mid_num = half_list[int(len(half_list) / 2)]

# Binary Search
            # I dont think this is the right way, I think I have to do recurision for efficiency and readability of code

    return mid_num


test_list = [1, 3, 9, 11, 15, 19, 29]
test_val1 = 25
test_val2 = 15
print(binary_search(test_list, test_val1))
print(binary_search(test_list, test_val2))
