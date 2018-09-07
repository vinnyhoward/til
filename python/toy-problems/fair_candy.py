def distribute(m, n):
    l = [0] * n
    num_lst = []

    if m <= 0:
        return l

    for num in l:
        if num <= 0:
            num = 1
            num_lst.append(num)

    while m >= sum(num_lst):
        print(sum(num_lst))
        for num in num_lst:

            if num >= 1:
                num += 1
            num_lst.append(num)

    return sum(num_lst)



# print(distribute(-5, 10))  # [0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
# print(distribute(0, 10))  # [0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
# print(distribute(5, 10))  # [0, 0, 0, 0, 0, 1, 1, 1, 1, 1])
print(distribute(10, 10))  # [1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
# print(distribute(15, 10))  # [1, 1, 1, 1, 1, 2, 2, 2, 2, 2])
