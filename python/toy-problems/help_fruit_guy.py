# Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.

# Notes
# If the array is null/nil/None or empty you should return empty array ([]).
# The rotten fruit name will be in this camelcase (rottenFruit).
# The returned array should be in lowercase.

def remove_rotten(bag_of_fruits):
  new_fruit_arr = []
  if bag_of_fruits is None:
    return []
  else:
    for x in bag_of_fruits:
      if x[0:6] == 'rotten':
        new_fruit_arr.append(x[6:].lower())
      else:
        new_fruit_arr.append(x.lower())

  return new_fruit_arr

remove_rotten([])

# def remove_rotten(bag_of_fruits):
#     return [x.replace('rotten', '').lower() for x in bag_of_fruits] if bag_of_fruits else []