# This kata was seen in programming competitions with a wide range of variations. A strict bouncy array of numbers, of
# length three or longer, is an array that each term (neither the first nor the last element) is strictly higher or lower
# than its neighbours.

# For example, the array:

# arr = [7,9,6,10,5,11,10,12,13,4,2,5,1,6,4,8] (length = 16)
# The two longest bouncy subarrays of arr are

# [7,9,6,10,5,11,10,12] (length = 8) and [4,2,5,1,6,4,8] (length = 7)

# According to the given definition, the arrays [8,1,4,6,7], [1,2,2,1,4,5], are not bouncy.

# For the special case of length 2 arrays, we will consider them strict bouncy if the two elements are different.

# The arrays [-1,4] and [0,-10] are both bouncy, while [0,0] is not.

# An array of length 1 will be considered strict bouncy itself.

# You will be given an array of integers and you should output the longest strict bouncy subarray.

# In the case of having more than one bouncy subarray of same length, it should be output the subarray with its first term of lowest index in the original array.

# Let's see the result for the first given example.

# arr = [7,9,6,10,5,11,10,12,13,4,2,5,1,6,4,8]
# longest_bouncy_list(arr) === [7,9,6,10,5,11,10,12]
# See more examples in the example tests box.

# Features of the random tests

# length of the array inputs up to 1000
# -500 <= arr[i] <= 500

# Toy Problem in Progress

# Giant Failure - Still in progress


def longest_bouncy_list(arr):
    lst_one, lst_two = [], []
    bounce = ''
    count = 0
    value = []

    if arr[1:] == arr[:-1]:
        return [arr[0]]

    if arr[0] < arr[1]:
        bounce = 'low'
    elif arr[0] > arr[1]:
        bounce = 'high'

    for x, y in zip(arr[::], arr[1::]):
        if bounce == 'low' and x < y:
            lst_one.append(x)
            count += 1
            bounce = 'high'
        elif bounce == 'high' and x > y:
            lst_one.append(x)
            count += 1
            bounce = 'low'
        elif bounce == 'low' and x > y or bounce == 'high' and x < y:
            count += 1
            value.append(count)

    lst_answer = arr[0: value.pop(0)]
    last_value = value.pop(-1)

    if arr[last_value::] < arr[last_value + 1::]:
        bounce = 'low'
    elif arr[last_value::] > arr[last_value + 1::]:
        bounce = 'high'

    for x, y in zip(arr[last_value::], arr[last_value + 1::]):
        if bounce == 'low' and x < y:
            lst_two.append(x)
            count += 1
            bounce = 'high'
        elif bounce == 'high' and x > y:
            lst_two.append(x)
            count += 1
            bounce = 'low'
        elif bounce == 'low' and x > y or bounce == 'high' and x < y:
            count += 1
            value.append(count)

    if len(lst_answer) > len(lst_two):
        return lst_answer
    else:
        return lst_two


# [13, 2]
arr1 = [7, 9, 6, 10, 5, 11, 10, 12, 13, 4, 2, 5, 1, 6, 4, 8]
print(longest_bouncy_list(arr1))
[7, 9, 6, 10, 5, 11, 10, 12]
arr2 = [7, 7, 7, 7, 7]
print(longest_bouncy_list(arr2))
#  [7]
arr3 = [1, 2, 3, 4, 5, 6]
print(longest_bouncy_list(arr3))
# [1,2]
