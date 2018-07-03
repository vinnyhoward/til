# Enumerate 

Enumerate is a built-in function of Python. It’s usefulness can not be summarized in a single line. Yet most of the newcomers and even some advanced programmers are unaware of it. It allows us to loop over something and have an automatic counter. Here are a few examples:

```
for counter, value in enumerate(some_list):
    print(counter, value)
```

Without ```enumerate```

```
index_count = 0
word = "abcde"
for letter in word:
  print(word[index_count])
  index_count += 1

  # Output:
  # At index 0 the letter is a
  # At index 1 the letter is b
  # At index 2 the letter is c
  # At index 3 the letter is d
  # At index 4 the letter is e
```

With ```enumerate```

```
word = "abcde"
for item in enumerate(word):
  print(item)

  # Output: You receive a pack of tuples
  # (0, 'a')
  # (1, 'b')
  # (2, 'c')
  # (4, 'd')
  # (4, 'e')
```

With ```enumerate``` and ```tuple unpacking```

```
word = "abcde"
for index, letter in enumerate(word):
  print(index)
  print(letter)
  print('\n')

  # Output:
  # 0
  # a

  # 1
  # b

  # 2
  # c

  # 3
  # d
  
  # 4
  # e
```

And there is more! ```enumerate``` also accepts an optional argument which makes it even more useful.

```
my_list = ['apple', 'banana', 'grapes', 'pear']
for c, value in enumerate(my_list, 1):
    print(c, value)

# Output:
# 1 apple
# 2 banana
# 3 grapes
# 4 pear
```

The optional argument allows us to tell ```enumerate``` from where to start the index. You can also create tuples containing the index and list item using a list. Here is an example:

```
my_list = ['apple', 'banana', 'grapes', 'pear']
counter_list = list(enumerate(my_list, 1))
print(counter_list)
# Output: [(1, 'apple'), (2, 'banana'), (3, 'grapes'), (4, 'pear')]
```