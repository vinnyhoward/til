# Intermediate topics

## Grouping and capturing — ()

```
a(bc)           parentheses create a capturing group with value bc 
a(?:bc)*        using ?: we disable the capturing group 
a(?<foo>bc)     using ?<foo> we put a name to the group 
```

This operator is very useful when we need to extract information from strings or data using your preferred programming language. Any multiple occurrences captured by several groups will be exposed in the form of a classical array: we will access their values specifying using an index on the result of the match.

If we choose to put a name to the groups (using ```(?<foo>...)```) we will be able to retrieve the group values using the match result like a dictionary where the keys will be the name of each group.