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

### Console.dir()

Displays an interactive listing of the properties of a specified JavaScript object. This listing lets you use disclosure triangles to examine the contents of child objects.

### Console.dirxml()

Displays an XML/HTML Element representation of the specified object if possible or the JavaScript Object view if it is not possible.

### Console.error()

Outputs an error message. You may use string substitution and additional arguments with this method.

### Console.exception()  

An alias for error().

### Console.group()

Creates a new inline group, indenting all following output by another level. To move back out a level, call ```groupEnd()```.

### Console.groupCollapsed()

Creates a new inline group, indenting all following output by another level. However, unlike group() this starts with the inline group collapsed requiring the use of a disclosure button to expand it. To move back out a level, call groupEnd().

### Console.groupEnd()

Exits the current inline group.

### Console.info()

Informative logging of information. You may use string substitution and additional arguments with this method.

### Console.log()

For general output of logging information. You may use string substitution and additional arguments with this method.

### Console.profile() 

Starts the browser's built-in profiler (for example, the Firefox performance tool). You can specify an optional name for the profile.

### Console.profileEnd() 

Stops the profiler. You can see the resulting profile in the browser's performance tool (for example, the Firefox performance tool).

### Console.table()

Displays tabular data as a table.

### Console.time()

Starts a timer with a name specified as an input parameter. Up to 10,000 simultaneous timers can run on a given page.

### Console.timeEnd()

Stops the specified timer and logs the elapsed time in seconds since it started.

### Console.timeLog()

Logs the value of the specified timer to the console.

### Console.timeStamp() 

Adds a marker to the browser's Timeline or Waterfall tool.

### Console.trace()

Outputs a stack trace.

### Console.warn()

Outputs a warning message. You may use string substitution and additional arguments with this method.
