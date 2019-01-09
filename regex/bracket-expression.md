Bracket expressions — []

```
[abc]            matches a string that has either an a or a b or a c -> is the same as a|b|c 
[a-c]            same as previous
[a-fA-F0-9]      a string that represents a single hexadecimal digit, case insensitively 
[0-9]%           a string that has a character from 0 to 9 before a % sign
[^a-zA-Z]        a string that has not a letter from a to z or from A to Z. In this case the ^ is used as negation of the expression 
```

Remember that inside bracket expressions all special characters (including the backslash ```\)``` lose their special powers: thus we will not apply the “escape rule”.