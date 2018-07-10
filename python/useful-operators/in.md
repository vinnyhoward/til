# In key operator

You can use the ```in``` operator to do quick boolean checks

```
'x' in [1,2,3]

# Output:
# False

'x' in ['x',2,'Bub']

# Output:
# True
```

This method also works for ```Dictionaries```

```
'mykey' in {'mkey': 345}

# Output:
# True

d =  {'mkey': 345}
345 in d.values()

# Output:
# True

d =  {'mkey': 345}
345 in d.keys()

# Output:
# false
```