# Asynchronous Javascript

Javascript is single threaded (one command executing at a time) and has a synchronous execution model (each line is executed in order the code appears)

So what if we need to wait some time before we can execute certain bits of code? Perhaps we need to wait on fresh data from an API/Server request or for a timer to complete and then execute our code

We have a conundrum - a tension between wanting to delay some code execution but no wanting to block the thread from any further code running while we wait.

## There are the components that help with this issue:

- Thread of execution

- Memory/variable environment

- Call stack

## Adding

- Web browser APIs/Node background threads

- Callback/Message/Task Queue

- Event Loop
