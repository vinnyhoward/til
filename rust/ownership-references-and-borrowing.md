# References and Borrowing

The issue with the tuple code in Listing 4-5 is that we have to return the `String` to the calling function so we can still use the `String` after the call to calculate_length, because the `String` was moved into calculate_length.

Here is how you would define and use a calculate_length function that has a reference to an object as a parameter instead of taking ownership of the value:

Filename: src/main.rs

```rust
fn main() {
let s1 = String::from("hello");

    let len = calculate_length(&s1);

    println!("The length of '{}' is {}.", s1, len);

}

fn calculate_length(s: &String) -> usize {
s.len()
}
```

First, notice that all the tuple code in the variable declaration and the function return value is gone. Second, note that we pass &s1 into calculate_length and, in its definition, we take `&String` rather than `String`.

These ampersands are references, and they allow you to refer to some value without taking ownership of it. Figure 4-5 shows a diagram.

<img alt="refernce" src="https://doc.rust-lang.org/book/img/trpl04-01.svg" width="400">

Figure 4-5: A diagram of `&String` `s` pointing at `String` `s1`

Note: The opposite of referencing by using & is dereferencing, which is accomplished with the dereference operator, `\*`. We’ll see some uses of the dereference operator in Chapter 8 and discuss details of dereferencing in Chapter 15.

Let’s take a closer look at the function call here:

```rust
    let s1 = String::from("hello");

    let len = calculate_length(&s1);
```

The `&s1` syntax lets us create a reference that refers to the value of s1 but does not own it. Because it does not own it, the value it points to will not be dropped when the reference goes out of scope.

Likewise, the signature of the function uses & to indicate that the type of the parameter `s` is a reference. Let’s add some explanatory annotations:
