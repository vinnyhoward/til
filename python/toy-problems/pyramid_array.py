# Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

# pyramid(0) => [ ]
# pyramid(1) => [  [1]  ]
# pyramid(2) => [  [1],  [1, 1]  ]
# pyramid(3) => [  [1],  [1, 1],  [1, 1, 1]  ]

# Note: the subarrays should be filled with 1s

# My Answer


def pyramid(n):
    if n == 0:
        return []

    count = 1
    pyramid_lst = []

    while count <= n:

        nested_lst = [1] * count
        count += 1
        pyramid_lst.append(nested_lst)

    return pyramid_lst

# Better Answer

# def pyramid(n):
#     return [ [1] * i for i in range(1, n+1) ]


print(pyramid(0))
# []
print(pyramid(1))
#  [[1]]
print(pyramid(2))
# [[1], [1, 1]]
print(pyramid(3))
# [[1], [1, 1], [1, 1, 1]]
