# Assert Testing

The assert module provides a simple set of assertion tests that can be used to test invariants.

## assert(value[, message])#

value ```<any>```
message ```<any>```
An alias of ```assert.ok().```

## assert.deepEqual(actual, expected[, message])#

- actual <any>
- expected <any>
- message <any>
Tests for deep equality between the actual and expected parameters. Primitive values are compared with the Abstract Equality Comparison ( == ).

Only ```enumerable``` "own" properties are considered. The ```assert.deepEqual()``` implementation does not test the [[Prototype]] of objects, attached symbols, or non-enumerable properties — for such checks, consider using assert.deepStrictEqual() instead. This can lead to some potentially surprising results. For example, the following example does not throw an AssertionError because the properties on the RegExp object are not enumerable: