# Recursion 

Objectives to help you understand `recursion`:

- Define what recursion is and how it can be used
- Understand the two essential components of a recursive function
- Visualize the call stack to better debug and understand recursive function

## What is recursion?

In a nutshell, it is a process that calls itself.

Recursion is a way of programming or coding a problem, in which a function calls itself one or more times in its body. Usually, it is returning the return value of this function call. If a function definition fulfils the condition of recursion, we call this function a recursive function.

## Where its commonly used

- `JSON.parse` / `JSON.stringify`
- `document.getElementById` and `DOM` traversal
- Object traversal

## Termination condition:
A recursive function has to terminate to be used in a program. A recursive function terminates, if with every recursive call the solution of the problem is downsized and moves towards a base case. A base case is a case, where the problem can be solved without further recursion. A recursion can lead to an infinite loop, if the base case is not met in the calls.

Example in Python: 
```
def factorial(n):
    if n == 1:
        return 1
    else:
        return n * factorial(n-1)
```

## Base Case Condition 
The base case condition is like the exit condition, without the base case, the recursion will be running infinitely and unusable