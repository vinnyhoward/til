# Math.log2(n)

The `Math.log2()` function returns the `base 2 logarithm` of a number, that is

```
console.log(Math.log2(3));
// expected output: 1.584962500721156

console.log(Math.log2(2));
// expected output: 1

console.log(Math.log2(1));
// expected output: 0

console.log(Math.log2(0));
// expected output: -Infinity

```

If the value of `x` is less than `0`, the return value is always `NaN`.

Because `log2()` is a static method of `Math`, you always use it as `Math.log2()`, rather than as a method of a Math object you created (Math is not a constructor).

This function is the equivalent of `Math.log(x) / Math.log(2)`.  For` log2(e)` use the constant `Math.LOG2E` which is `1 / Math.LN2`.  

