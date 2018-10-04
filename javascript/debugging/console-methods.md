# Console Methods

The ```Console``` object provides access to the browsers debugging console. The specifics vary from browser to browser.

The ```Console``` object can be accessed from any global object. ```Window``` on browsing scopes and ```WorkerGlobalScope``` as specific variants in workers via the property console. It's exposed as ````Window.console```, and can be referenced as simply console. For example:

Example:
```
console.log('Hi it's me your friend')
```

### Console.assert()

Log a message and stack trace to console if the first argument is false.

### Console.clear()

Clear the console.

### Console.count()

Log the number of times this line has been called with the given label.

### Console.countReset()

Resets the value of the counter with the given label.

### Console.debug()

Outputs a message to the console with the log level "debug".