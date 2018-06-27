# Iterables 

The term iterable means you can "iterate" over the object for examples you can iterate over every character in a string, iterate over every item in a list, iterate over every key in a dictionary. 

# For Loop

In general, statements are executed sequentially: The first statement in a function is executed first, followed by the second, and so on. There may be a situation when you need to execute a block of code several number of times.

Programming languages provide various control structures that allow for more complicated execution paths.

Python programming language provides following types of loops to handle looping requirements.

## While Loop

Repeats a statement or group of statements while a given condition is TRUE. It tests the condition before executing the loop body.

## For Loop

Executes a sequence of statements multiple times and abbreviates the code that manages the loop variable.

## Nested Loop

You can use one or more loop inside any another while, for or do..while loop.

Syntax of a ```for loop```

```
my_iterable = [1,2,3]
for item_name in my_iterable:
  print(item_name)

Output: 1, 2, 3
```

Another example:

```
my_list = [1,2,3,4,5,6,7,8,9]

for num in my_list:
  if num % 2 == 0:
    print(num)
  else:
    print(f'Odd Number: {num')
```

## For Loops and Tuple Unpacking
```
my_list = [(1,2), (3,4), (5,6), (7,8,), (9, 10)]

for item in my_list:
  print(item)

Output: (1,2), (3,4), (5,6), (7,8,), (9, 10)

for (a, b) in my_list:
  print(a)
  print(b)

Output: 1,2,3,4,5,6,7,8,9

d = {'k1': 1, 'k2': 2, 'k3': 3}

for key, value in d.items():
  print(value)

Output: 1, 2, 4
```