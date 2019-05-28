# Optional Catch Binding

Allow developers to use `try/catch` without creating an unused binding.
You are free to go ahead make use of catch block without a param

```
try {
    throw new Error('Some cool error')
} catch {
    console.log('No params for catch :)
}
```