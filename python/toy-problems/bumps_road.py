# Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it
# dies totally. Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"),
# work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".

def bumps(road):
  arrayLetters = []
  for item in road:
    if item == 'n':
      arrayLetters.append(item)
  if len(arrayLetters) <= 15:
    return 'Woohoo!'
  else:
    return 'Car Dead'

bumps("_nnnnnnn_n__n______nn__")

# Concise version 
# def bumps(road):
#     return "Woohoo!" if road.count("n") <= 15 else "Car Dead"