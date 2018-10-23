# String ```padding``` with ```padStart``` and padEnd

```String.prototype.padStart``` and ```String.prototype.padEnd``` make working with strings in JavaScript a more pleasant experience and help avoid depending on extra libraries.

## padStart()

```padStart()``` returns a string of a given length (targetLength) by inserting pads at the beginning. Pads are a given string, repeated if needed until the desired length is reached. Left is the beginning of a string (at least in most Western languages). A typical example is creating columns with an empty space:

```
console.log('react'.padStart(10).length)         // "       react" is 10
console.log('backbone'.padStart(10).length)         // "  backbone" is 10
```
It can be a useful methods for financial statements:

```
console.log('0.00'.padStart(20))         	
console.log('10,000.00'.padStart(20))    
console.log('250,000.00'.padStart(20))    
```
The results will be nicely formatted as in an accounting ledger:

```
                0.00
           10,000.00
          250,000.00
```

Let’s put some padding other than an empty space with the second argument, a string to pad with:

```
console.log('react'.padStart(10, '_'))         // "_____react"
console.log('backbone'.padStart(10, '*'))         // "**backbone"
```
## padEnd()
As you can guess from the name ```padEnd``` will pad a string from the end which is the right side. As for the second argument, you can actually use a string of any length. For example:

```
console.log('react'.padEnd(10, ':-)'))         // "react:-):-" is 10
console.log('backbone'.padEnd(10, '*'))         // "backbone**" is 10
```