# Basic topics

[Regex Playground](https://regexr.com/)

## Anchors — ^ and $

User 

```
^The        matches any string that starts with The -> Try it!
end$        matches a string that ends with end
^The end$   exact string match (starts and ends with The end)
roar        matches any string that has the text roar in it
```

## Quantifiers — * + ? and {}

```
abc*        matches a string that has ab followed by zero or more c -> Try it!
abc+        matches a string that has ab followed by one or more c
abc?        matches a string that has ab followed by zero or one c
abc{2}      matches a string that has ab followed by 2 c
abc{2,}     matches a string that has ab followed by 2 or more c
abc{2,5}    matches a string that has ab followed by 2 up to 5 c
a(bc)*      matches a string that has a followed by zero or more copies of the sequence bc
a(bc){2,5}  matches a string that has a followed by 2 up to 5 copies of the sequence bc
```

## OR operator — | or []

```
a(b|c)     matches a string that has a followed by b or c -> Try it!
a[bc]      same as previous
```

## Character classes — \d \w \s and .

```
\d         matches a single character that is a digit -> Try it!
\w         matches a word character (alphanumeric character plus underscore) -> Try it!
\s         matches a whitespace character (includes tabs and line breaks)
.          matches any character -> Try it!
```

Use the ```.``` operator carefully since often class or negated character class (which we’ll cover next) are faster and more precise.

```\d```, ```\w``` and ```\s``` also present their negations with ```\D```, ```\W``` and ```\S``` respectively.

For example, ```\D``` will perform the inverse match with respect to that obtained with ```\d``.

In order to be taken literally, you must escape the characters ```^.[$()|*+?{\``` with a backslash ```\``` as they have special meaning

```
\D         matches a single non-digit character -> Try it!
```

```
\$\d       matches a string that has a $ before one digit
```

Notice that you can match also non-printable characters like tabs ```\t```, new-lines ```\n```, carriage returns \r.