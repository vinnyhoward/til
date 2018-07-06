def sum_of_a_beach(beach):
    needle = 'sand' or 'sun'
    numLength = []
    last_found = -1
    while True:
        last_found = beach.find(needle or needle1, last_found + 1)
        if last_found == -1:
            break
        numLength.append(last_found)
    print(len(numLength))


sum_of_a_beach("sandsun")
