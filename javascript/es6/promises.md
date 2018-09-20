# Promises

A ```Promise``` is an object that is used as a placeholder for the eventual result of a deferred (and possibly asynchronous) computation. Or simply put a ```promise``` is a container for a future value.

```Promises``` and its patterns help simplify and help mitigate the problems associated with callbacks and what people commonly call ```callback hell``` or ```pyramid of doom```

Network requests take anywhere between 10ms to 200ms, this may seem like a short time, but for a computer its a long time. Users and computers don't want to wait for the function to execute before it can move on. ```Promises``` help make the request asynchronously, meaning it will make a request expecting three things ot happen. For the ```Promise``` object to return one of two, ```resolve``` or ```reject```. After the asynchronous request is made, the computer will execute all other code while waiting for one of the two parameters to come back.