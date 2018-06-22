# Python Notes
Python is a ```dynamic typed language```, not to be confused with ```static typing```. 
## Benefits of dynamic typed language are
* Very easy to work with

* Faster development time
## Cons of dynamic typed language are
* May result in unexpected data types

* You need to be aware of ```type()```

You can use ```type()``` to check what type a variable is.

# Strings
String are sequences of characters, using the syntax of either single quotes or double quotes:
```
'hello'

"Hello"

" Don't do that "
``` 

Because strings are ```ordered sequences``` it means we can using ```indexing``` and ```slicing``` to grab sub-sections of the string.

Indexing notation uses [] notation after the string (or variable assigned the string).

Indexing allows you to grab a single character from the string.

Example of indexing:
```
Character: h e l l o
Index: 0 1 2 3 4
Reverse Index 0 -4 -3 -2 -1
```
Choosing an index of ```0``` would get you the letter ```h```, for the letter ```o``` you would use the index of 4.

Python also allows you to use ```Reverse Index``` to get numbers from the last of the string, in this case ```-1``` would get the letter ```o```

You can also ```slice``` an index, for example, to slice out the ```LongWord``` out of the variable ```my_string``` you would use ```slice indexing``` the arguments include ```my_string[start:stop:step]```
```
my_string='superLongWordThatSwayLongLol'

my_string[5:12] 
```
Other forms of using ```slice indexing``` is using 

* ```my_string[::]``` to return the entire string

* ```my_string[::3]``` to jump every 3 indexes including zero. 

* Reversing a string would be ```my_string[::-1]```

## Strings are immutable 
Strings cannot be reassigned because they are permanent. For example: 
```
name = 'Same'
name[0] = 'P'
```
This would return a ```TypeError```
You can splice it and re-assign it to another variable
```
last_letters = name[1:]
'P' + last_letters
```
## String Interpolation Methods
The ```.format()``` method
```
print('This is a string {}'.format('INSERT))
Output: 'This is a string INSERT'
```
You can also use several braces and ```.format()``` will insert them in order
```
print('The {} {} {}'.format('fox', 'brown', 'quick')
Output: The fox brown quick
```
You may also manually insert variables 
```
print('The {2} {1} {3}'.format('fox', 'brown', 'quick')
Output: The quick brown fox

print('The {0} {0} {0}'.format('fox', 'brown', 'quick')
Output: fox fox fox fox

print('The {c} {b} {a}'.format(a='fox', b='brown', c='quick')
Output: The quick brown fox
```

### String Interpolation with Precision Float
Float formatting follows ```{value: width.precision f}```
```
result = 100/777
Output: 0.1287001287001287
```
With ```String Interpolation```
```
print("The result was {r}".format(r=result))
Output: "The result was 0.1287001287001287"

Using full format:
print("The result was {r:1.3f}".format(r=result))
Output: "The result was 0.129"
```

### Second String Interpolation
Injecting variables right into the curly braces
```
name="Jose"
print(f"Hello, his name is {name}")
Output: "Hello, his name is Jose"
```
