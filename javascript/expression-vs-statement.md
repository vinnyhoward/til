# Expression vs Statement

Expression: Expressions only contain identifiers, literals and operators, where operators include arithmetic and boolean operators, the function call operator () the subscription operator [] and similar, and can be reduced to some kind of "value", which can be any Python object. 

Examples:

```
3 + 5
map(lambda x: x*x, range(10))
[a.x for a in some_iterable]
yield 7
```

Statement: on the other hand, are everything that can make up a line (or several lines) of Python code. Note that expressions are statements as well. 

Examples:

```
# all the above expressions
print 42
if x: do_y()
return
a = 7
```

Expression vs Statement: Produces a value and performs an action.