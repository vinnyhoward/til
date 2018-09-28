# Node

Node.js is a run-time JavaScript environment built on top of Chrome's V8 engine. This engine takes your JavaScript code and converts it into faster machine code. Machine code is low-level code which the computer can run without needing to first interpret it. It uses an event-driven, non-blocking I/O model. I/O refers to input/output. It can be anything ranging from reading/writing local files to making an HTTP request to an API. It is lightweight and so efficient. Node.js has a package ecosystem called npm. 

Node can used to build a whole variety of applications on the web, real-time chat applications, REST API servers, just to name a few. Its mainly used to build network programs such as web servers (similar to PHP, Java, ASP.NET) 

Node came into existence in 2009 by Ryan Dahl and the original developers of JavaScript extended it from something you could only run in the browser to something you could run on your machine as a standalone application. 

## Event-Driven Programming

Event-driven programming is building an application based on responding to events. When an event occurs, like click or keyPress, running a callback function which is registered to the element for that event.

Event-Driven programming follows mainly a publish-subscribe pattern:

```
const addToCart = (productId) => {
  event.send("card.add", {id: productId});
}

event.on("card.add", (event) => {
  show("Adding Product" + event.od)
})
```

![alt text][logo]

[logo]: https://image.ibb.co/ftvOBp/blocking.png "I/O Block"

## Blocking I/O

In the blocking method, user2's data request is not initiated until user1's data is printed to the screen.

If this was a web server, we would have to start a new thread for every new user. But JavaScript is single-threaded (not really, but it has a single-threaded event loop, which we’ll discuss a bit later). So this would make JavaScript not very well suited for multi-threaded tasks.

That’s where the non-blocking part comes in.

## Non-blocking I/O

On the other hand using a non-blocking request, you can initiate a data request for user2 without waiting for the response the request for user1. You can initiate both requests in parallel.

This non-blocking I/O eliminates the need for multi-threading, since the server can handle multiple requests at the same time.

## The JavaScript Event Loop

![alt text][event-loop]

[event-loop]: https://image.ibb.co/fdQUj9/event_loop.png "Event Loop"

- Push main() onto the call stack.
- Push console.log() onto the call stack. This then runs right away, and gets popped.
- Push setTimeout(2000) onto the stack. setTimeout(2000) is a Node API. When we call it, we register the event-callback pair. The event will wait 2000 milliseconds, then callback is the function.
- After registering it in the APIs, setTimeout(2000) gets popped from the call stack.
- Now the second setTimeout(0) gets registered in the same way. We now have two Node APIs waiting to execute.
- After waiting for 0 seconds, setTimeout(0) gets moved to the callback queue, and the same thing happens with setTimeout(2000).
- In the callback queue, the functions wait for the call stack to be empty, because only one statement can execute a time.This is taken care of by the event loop.
- The last console.log() runs, and the main() gets popped from the call stack.
- The event loop sees that the call stack is empty and the callback queue is not empty. So it moves the callbacks (in a first-in-first-out order) to the call stack for execution.
