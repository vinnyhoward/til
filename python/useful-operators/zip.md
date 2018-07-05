# Zip

The ```zip()``` function returns a zip object, which is an iterator of tuples where the first item in each passed iterator is paired together, and then the second item in each passed iterator are paired together etc.

If the passed iterators have different lengths, the iterator with least items decides the length of the new iterator.

## Syntax

```zip(iterator1, iterqator2, iterator3 ...)```

An example of its usage would be: 

```
a = ("John", "Charles", "Mike")
b = ("Jenny", "Christy", "Monica")

x = zip(a, b)

#use the tuple() function to display a readable version of the result:

print(tuple(x))

#Output:

#(('John', 'Jenny'), ('Charles', 'Christy'), ('Mike', 'Monica'))

```

You can also convert them into a list of tuples:

```
mylist1 = [1, 2, 3,]

mylist2 = ['a', 'b', 'c']

list(zip(mylist1, mylist2))

#Output:
#[(1, 'a'), (2, 'b'), (3, 'c')]
```