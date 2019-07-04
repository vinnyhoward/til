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

Python Example: 

```
def factorial(n):
    if n == 1:
        return 1
    else:
        return n * factorial(n-1)
```

JavaScript Example:

```
function countDown(num) {
    if (num <= 0) return 'Count Down Reached!';
    console.log(num);
    num--;
    countDown(num);
  }
```

## Base Case Condition 
The base case condition is like the exit condition, without the base case, the recursion will be running infinitely and unusable

For example:

```
function sumRange(sum) {
  if (num ===1) return 1;
  return num + sumRange(num - 1)
}
```

The `base case` condition will always be a conditional following a return. In the example up above, it is `if (num ===1) return 1;`

## Two essential parts of a recursive function

- Base Case
- Different Input


## Factorials 

The ```factorial``` of a natural number is a number multiplied by `"number minus one"`, then by `"number minus two"`, and so on till `1`. The factorial of `n` is denoted as `n`!

We can write a definition of factorial like this:

```
n! = n * (n - 1) * (n - 2) * ...*1
```

Values of factorials for different `n`:

```
1! = 1
2! = 2 * 1 = 2
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120
```

The task is to write a function ```factorial(n)``` that calculates n! using recursive calls.

```
alert( factorial(5) ); // 120
```

P.S. Hint: `n!` can be written as `n * (n-1)!` For instance: `3! = 3*2! = 3*2*1! = 6`

```
function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

alert( factorial(5) ); // 120
```

## Common Pitfalls in Recursion

- No base case
- Forgetting to return or returning the incorrect value
- Stack overflow (no, not the site)

```
function factorial(num) {
  if (num === 1) return 1; // If this base case did not exist, the environment would exceed its call stack
  return num * factorial(num - 1);
};
```

## Memoization

It is a function that has a smaller function within it that is the `helper` recursive function that would constantly be called until the base case is met while storing its results without the recursion needing to recompile.

Lets take this fibonacci sequence as an example.

```
function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}
```

The recursive solution up above was getting significantly slower for each additional number in the sequence due to exponential time growth. There is, however, a smart way of improving this solution and that is using ```Memoization```.

_“Memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.”_ (Wikipedia)

For our more efficient recursive solution we would want to store the arguments of each function call as well as the function’s output, and reuse it later on if the function was called with the same arguments.

Our efficient recursive solution looked like this:

```
const fastFib = memoize(fib);
function fib(n) {
  if (n < 2) {
    return n;
  }
  return 
fastFib(n - 1) + fastFib(n - 2);
}
```