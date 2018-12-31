def find_smallest_int(arr):
    low_num = arr[0]
    for i in arr:
        if i < low_num:
            low_num = i
    return low_num


find_smallest_int([78, 56, 232, 12, 11, 43])
