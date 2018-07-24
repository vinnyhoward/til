# Sum of Pairs

# Sum of Pairs
# Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

# sum_pairs([11, 3, 7, 5],         10)
# #              ^--^      3 + 7 = 10
# == [3, 7]

# sum_pairs([4, 3, 2, 3, 4],         6)
# #          ^-----^         4 + 2 = 6, indices: 0, 2 *
# #             ^-----^      3 + 3 = 6, indices: 1, 3
# #                ^-----^   2 + 4 = 6, indices: 2, 4
# #  * entire pair is earlier, and therefore is the correct answer
# == [4, 2]

# sum_pairs([0, 0, -2, 3], 2)
# #  there are no pairs of values that can be added to produce 2.
# == None/nil/undefined (Based on the language)

# sum_pairs([10, 5, 2, 3, 7, 5],         10)
# #              ^-----------^   5 + 5 = 10, indices: 1, 5
# #                    ^--^      3 + 7 = 10, indices: 3, 4 *
# #  * entire pair is earlier, and therefore is the correct answer
# == [3, 7]
# Negative numbers and duplicate numbers can and will appear.

# There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.

# Failed Attempt :(
# def sum_pairs(ints, s):
#     indice = []
#     temp_val = []
#     answer = []
#     index_count = 0

#     high_val = 0
#     low_index = 0

#     for idx, valx in enumerate(ints):
#         index_count = index_count + 1
#         for idy, valy in enumerate(ints):
#             if valx + valy == s and idx != idy:
#                 indice.append(index_count)
#                 temp_val.append((valx, valy))
#                 index_count = 0

#     for i, val in enumerate(indice):
#         if high_val <= i:
#             high_val = val
#             low_index = i
#             answer.append(temp_val[low_index])

#     print(answer)

#     if temp_val == None or temp_val == []:
#         return None
#     else:
#         return list(answer[0])


l1 = [1, 4, 8, 7, 3, 15]
l2 = [1, -2, 3, 0, -6, 1]
l3 = [20, -13, 40]
l4 = [1, 2, 3, 4, 1, 0]
l5 = [10, 5, 2, 3, 7, 5]
l6 = [4, -2, 3, 3, 4]
l7 = [0, 2, 0]
l8 = [5, 9, 13, -3]
l9 = [1, -2, 3, 0, -6, 1]
l10 = [1, 4, 8, 7, 3, 15]  # [7, 1]
sum_pairs(l5, 10)

# sum_pairs(l2, -6)
# sum_pairs(l3, -7)

# print('Index: ', index_count, 'Comparing Idx: ',
#       idx, 'Comparing Idy: ', idy)
