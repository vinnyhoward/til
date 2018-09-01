# Failed attempt
def bubble(arr):
    n = len(arr)
    for j in range(0, n):
        sorted = False
        for i in range(0, n - 1):
            print(arr[i + 1])
            if arr[i] > arr[i + 1]:
                swap = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = swap
                sorted = True
                print(j, arr)
        if sorted == False:
            break

    return j, arr


arr_template = [33, 19, 97, 42, 38, 69, 73, 54, 1, 24, 25,
                43, 46, 75, 70, 9, 31, 49, 36, 97, 46, 52, 44, 51, 63, 25,
                39, 44, 14, 19, 89, 50, 100, 11, 40, 3, 14, 44, 38, 95, 9,
                58, 49, 4, 12, 56, 52, 25, 14, 27, 28, 18, 31, 80, 59, 84,
                70, 6, 76, 31, 100, 30, 81, 19, 54, 76, 60, 8, 42, 35, 90,
                9, 90, 97, 6, 8, 27, 47, 10, 55, 52, 50, 38, 79, 71, 81, 89,
                59, 37, 27, 82, 23, 51, 87, 27, 90, 38, 25, 27, 46]

print(bubble(arr_template))
