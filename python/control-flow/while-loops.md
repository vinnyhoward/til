# While Loops

A ```while loop``` statement in Python programming language repeatedly executes a target statement as long as a given condition is true.

Syntax
The syntax of a while loop in Python programming language is −

```
while expression:
   statement(s)
else
   other statement(s)
```

Here, statement(s) may be a single statement or a block of statements. The condition may be any expression, and true is any non-zero value. The loop iterates while the condition is true.

When the condition becomes false, program control passes to the line immediately following the loop.

In Python, all the statements indented by the same number of character spaces after a programming construct are considered to be part of a single block of code. Python uses indentation as its method of grouping statements.


![flow diagram](https://www.tutorialspoint.com/python/images/python_while_loop.jpg "Flow Diagram" )
<!-- <img src="https://www.tutorialspoint.com/python/images/python_while_loop.jpg"  width="100%"> -->

Here, key point of the while loop is that the loop might not ever run. When the condition is tested and the result is false, the loop body will be skipped and the first statement after the while loop will be executed.

```
count = 0
while (count < 9):
   print 'The count is:', count
   count = count + 1

print "Good bye!"
```

Output:
```
The count is: 0
The count is: 1
The count is: 2
The count is: 3
The count is: 4
The count is: 5
The count is: 6
The count is: 7
The count is: 8
Adios!

```

The block here, consisting of the print and increment statements, is executed repeatedly until count is no longer less than 9. With each iteration, the current value of the index count is displayed and then increased by 1.

## Break, Continue, Pass

We can use break, continue, and pass statements in our loops to add additional functionality for various cases. The three statements are defined by:

* Break -Breaks out of current closest enclosing loop.

* Continue - Goes to the top of the closest enclosing loop.

* Pass - does nothing at all.

An example using ```Continue``` would be:

```
mystring = "Sammy"

for letter in mystring:
  if letter == 'a':
    continue
  print(letter)

Output: 
S
m
m
y
```

An example using ```Pass``` would be:

```
x = [1,2,3]

for item in x:
  pass

print('end of script')

Output: end of script
```

An example using ```Break``` would be:


```
mystring = "Sammy"

for letter in mystring:
  if letter == 'a':
    break
  print(letter)

Output: 
S
```