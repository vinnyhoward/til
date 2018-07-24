# https://www.codewars.com/kata/fruit-machine/train/python

def fruit(reels, spins):
  fruit_array = []
  checked_array = []
  s0 = spins[0]
  s1 = spins[1]
  s2 = spins[2]

  r0 = reels[0] 
  r1 = reels[1] 
  r2 = reels[2] 

  fruit_array.append(r0[s0])
  fruit_array.append(r1[s1])
  fruit_array.append(r2[s2])
  freq = {x:fruit_array.count(x) for x in fruit_array}
  print(freq)

  for key, item in freq.items():
    if 'Wild' in freq and freq['Wild'] == 1:
        if key == 'Star' and item == 2:
          return 18
        elif key == 'Bell' and item == 2:
          return 16
        elif key == 'Shell' and item == 2:
          return 14
        elif key == 'Seven' and item == 2:
          return 12
        elif key == 'Cherry' and item == 2:
          return 10
        elif key == 'Bar' and item == 2:
          return 8
        if key == 'King' and item == 2:
          return 6
        elif key == 'Queen' and item == 2:
          return 4
        elif key == 'Jack' and item == 2:
          return 2
    else:
      if item == 3:
        if key == 'Wild':
          return 100
        elif key == 'Star':
          return 90
        elif key == 'Bell':
          return 80
        elif key == 'Shell':
          return 70
        elif key == 'Seven':
          return 60
        elif key == 'Cherry':
          return 50
        elif key == 'Bar':
          return 40
        elif key == 'King':
          return 30
        elif key == 'Queen':
          return 20
        elif key == 'Jack':
          return 10
      elif item == 2:
        if key == 'Wild':
          return 10
        elif key == 'Star':
          return 9
        elif key == 'Bell':
          return 8
        elif key == 'Shell':
          return 7
        elif key == 'Seven':
          return 6
        elif key == 'Cherry':
          return 5
        elif key == 'Bar':
          return 4
        elif key == 'King':
          return 3
        elif key == 'Queen':
          return 2
        elif key == 'Jack':
          return 1
      else: 
        return 0
        break

  # for item in fruit_array:
  # if freq["King"] == 2 and freq["Wild"] == 1:
  #   break
  #   print(6)
  # elif freq["King"] == 2:
  #   break
  #   print(3)

  # if fruit_array.count()
  # print(fruit_array.count()))

# reel1 = ["King", "Jack", "Wild", "Bell", "Star", "Seven", "Queen", "Cherry", "Shell", "Bar"]
# reel2 = ["Star", "Bar", "Jack", "Seven", "Queen", "Wild", "King", "Bell", "Cherry", "Shell"]
# reel3 = ["King", "Bell", "Jack", "Shell", "Star", "Cherry", "Queen", "Bar", "Wild", "Seven"]
# spin = [0,5,0]
# fruit([reel1,reel2,reel3],spin)

# reel1 = ['King', 'Jack', 'Queen', 'Wild', 'Shell', 'Bar', 'Cherry', 'Seven', 'Bell', 'Star']
# reel2 = ['Bar', 'Seven', 'Cherry', 'Wild', 'Star', 'King', 'Bell', 'Jack', 'Queen', 'Shell']
# reel3 = ['Bar', 'Cherry', 'Bell', 'Star', 'Queen', 'Seven', 'Shell', 'Wild', 'King', 'Jack']
# spin = [9,2,5]
# fruit([reel1,reel2,reel3],spin)

reel1 = ['Queen', 'Seven', 'Star', 'Wild', 'Bar', 'Bell', 'Jack', 'Shell', 'King', 'Cherry']
reel2 = ['King', 'Jack', 'Bell', 'Cherry', 'Wild', 'Bar', 'Star', 'Queen', 'Shell', 'Seven']
reel3 = ['Shell', 'Seven', 'Cherry', 'Queen', 'Jack', 'Star', 'King', 'Bar', 'Bell', 'Wild']
spin = [7, 6, 5]
fruit([reel1,reel2,reel3],spin)

# my_list.sort()
# for i in range (len (my_list) -1):
#  	if my_list[i] == my_list[i+1]:
#  	print (my_list[i])