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
