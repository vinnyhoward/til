# Async/Await

Theres a special syntax or syntactical sugar to work with promises in a more comfortable fashion, called ```async/await```. It is really to understand and implement.

## Async

The ```async``` keyword can be placed right before a function:

```
async function addition(x, y) {
  return x + y
}
```
The word ```async``` just simply means that the function will aways return a ```promise```. If the code has ```return <non-promise>``` in it, then JavaScript automatically wraps it into a resolved promise with that value.

For instance, the code above returns a resolved promise with the result of the addition of the two arguments.

## Await

The keyword await makes JavaScript wait until that promise settles and returns its result.

Here’s example with a promise that resolves in 1 second:

```
async function willReturnPromise() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // *** Promise will resolve here

  alert(result);
}

willReturnPromise();
```

The function execution “pauses” at the line (***) and resumes when the promise settles, with result becoming its result. So the code above shows “done!” in one second.

Let’s emphasize: await literally makes JavaScript wait until the promise settles, and then go on with the result. That doesn’t cost any CPU resources, because the engine can do other jobs meanwhile: execute other scripts, handle events etc.

It’s just a more elegant syntax of getting the promise result than promise.then, easier to read and write.