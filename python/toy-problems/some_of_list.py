def summation(num): 
    number_list = []
    count = 0
    while count < num:
      count = count + 1
      number_list.append(count)
      if count == num: 
        return sum(number_list)
    
summation(8)