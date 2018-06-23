def isDigit(string):
  try: 
    isinstance(string.isdigit(), int) == True and isinstance(float(string), float)
    return True
  except ValueError:
    return False

    

isDigit("2324451a")