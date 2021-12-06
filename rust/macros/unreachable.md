# Unreachable

```rust
macro_rules! unreachable {
    () => { ... };
    ($msg : expr $(,) ?) => { ... };
    ($fmt : expr, $($arg : tt) *) => { ... };
}
```

Indicates unreachable code.

This is useful any time that the compiler can’t determine that some code is unreachable. For example:

- Match arms with guard conditions.

- Loops that dynamically terminate.

- Iterators that dynamically terminate.

If the determination that the code is unreachable proves incorrect, the program immediately terminates with a `panic!`.

The unsafe counterpart of this macro is the `unreachable_unchecked` function, which will cause `undefined` behavior if the code is reached.

## Panics

This will always `panic!`.

## Examples

Match arms:

```rust
fn foo(x: Option<i32>) {
    match x {
        Some(n) if n >= 0 => println!("Some(Non-negative)"),
        Some(n) if n <  0 => println!("Some(Negative)"),
        Some(_)           => unreachable!(), // compile error if commented out
        None              => println!("None")
    }
}
```

Iterators:

```rust
fn divide_by_three(x: u32) -> u32 { // one of the poorest implementations of x/3
    for i in 0.. {
        if 3*i < i { panic!("u32 overflow"); }
        if x < 3*i { return i-1; }
    }
    unreachable!();
}
```