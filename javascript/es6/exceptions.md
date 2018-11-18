# Exceptions

When the code runs into an unexpected problem, the idiomatic JavaScript way to handle this situation is through ```exceptions```.

## Creating exceptions

An exception is created using the throw keyword

Its as simple as:

```
throw value
```

Where ```value``` can be any JavaScript ```value``` including a string, a number or an object.

As soon as JavaScript executes this line, the normal program flow is halted and the control is held back to the nearest exception handler.

## Handling exceptions

An exception handler is a ```try```/```catch``` statement.

Any exception raised in the lines of code included in the ```try``` block is handled in the corresponding```catch``` block:
```
try {
  //lines of code
} catch (err) {
}
```
```err``` in this example is the exception value.

You can add multiple handlers, that can catch different types of errors.

## Finally

To complete this statement JavaScript has another statement called finally, which contains code that is executed regardless of the program flow, if the exception was handled or not, if there was an exception or if there wasn't:

```
try {
  //lines of code
} catch (e) {
} finally {
}
```

You can use finally without a catch block, to serve as a way to clean up any resource you might have opened in the tryblock, like files or network requests:

```
try {
  //lines of code
} finally {
}
```
## Nested try blocks

try blocks can be nested, and an exception is always handled in the nearest catch block:

```
try {
  //lines of code
  try {
    //other lines of code
  } finally {
    //other lines of code
  }
} catch (e) {
}
```

If an exception is raised in the inner try, it's handled in the outer catch block.