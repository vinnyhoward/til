# Dictionaries

```Dictionaries``` are immutable unordered mappings for storing objects. Previously we saw how lists store objects in an ordered sequence, dictionaries use a key-value pairing instead.

This key-value pair allows users to quickly grab objects without needs to know an index location

```Dictionaries``` use curly braces and colons to signify the keys and their associated values.
```
{'key0':'value0', 'key1':'value1', 'key2':'value2'}
```
## When to use a ```Dictionary``` vs a ```Lists```

```Dictionaries``` Objects retrieved by key name pairs

* Unordered and can not be sorted

```Lists``` Objects retrieved by location. 

* Ordered Sequence can be indexed or sliced.

## How to use a ```Dictionary``` (Similar to ```Objects``` in Javascript)
```
my_dict = {"key": "value", "key1": "value1", "key2": "value2"}

Output: {"key": "value", "key1": "value1", "key2": "value2"}

my_dict['key1]

Output: 'value1'

prices_lookup = {'apple': 2.99, 'oranges': 1.99, 'milk': 1.75}

prices_lookup['apple']

```

Just like ```Objects``` in Javascript, ```Dictionaries``` can store many value types such as ```Lists``` and ```Dictionaries``` inside of it.

```
complex_dic = {"key": "value", "key1": "value1", "key2": "value2", "key3": [0, 1, 3, 4, 1000], "key4": {"nested_key": "Hi, I'm a nested value"}}
```

To make a nested call from the values up above you would:

```
complex_dic = {"key": "value", "key1": "value1", "key2": "value2", "key3": [0, 1, 3, 4, 1000], "key4": {"nested_key": "Hi, I'm a nested value"}}

complex_dic["key4"]["nested_key"]

Output: "Hi, I'm a nested value"
```

Using the ```.value()``` method on your ```dictionary``` variable will return all ```values``` of the corresponding keys, but not the keys themselves.

Using the ```.keys()``` method on your ```dictionary``` variable will return all ```keys``` but not the values.

Using ```.items()``` will return your entire ```dictionary```