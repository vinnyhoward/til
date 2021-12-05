# Collect

Transforms an iterator into a collection.

`collect()` can take anything iterable, and turn it into a relevant collection. This is one of the more powerful methods in the standard library, used in a variety of contexts.

The most basic pattern in which `collect()` is used is to turn one collection into another. You take a collection, call `iter` on it, do a bunch of transformations, and then `collect()` at the end.

`collect()` can also create instances of types that are not typical collections. For example, a `String` can be built from `chars`, and an iterator of `Result<T, E>` items can be collected into `Result<Collection<T>, E>`. See the examples below for more.

Because `collect()` is so general, it can cause problems with type inference. As such, `collect()` is one of the few times you’ll see the syntax affectionately known as the `‘turbofish’: ::<>`. This helps the inference algorithm understand specifically which collection you’re trying to collect into.

## Examples



```rust
let a = [1, 2, 3];

let doubled: Vec<i32> = a.iter()
                         .map(|&x| x * 2)
                         .collect();

assert_eq!(vec![2, 4, 6], doubled);
```

Note that we needed the `: Vec<i32>` on the left-hand side. This is because we could collect into, for example, a `VecDeque<T>` instead:

```rust
use std::collections::VecDeque;

let a = [1, 2, 3];

let doubled: VecDeque<i32> = a.iter().map(|&x| x * 2).collect();

assert_eq!(2, doubled[0]);
assert_eq!(4, doubled[1]);
assert_eq!(6, doubled[2]);
```
