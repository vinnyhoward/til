# Vectors

An array is a fixed-size list of elements, of the same data type. Even with `mut`, its element count cannot be changed. A vector is kind of a re-sizable array but all elements must be in the same type.

It’s a generic type, written as `Vec<T>` . `T` can have any type, ex. The type of a `Vec` of `i32s` is `Vec<i32>`. Also, Vectors always allocate their data in a dynamically allocated heap.

Create empty vector
```rust
let mut a = Vec::new(); //1.With new() keyword
let mut b = vec![]; //2.Using the vec! macro
```

Create with data types

```rust
let mut a2: Vec<i32> = Vec::new();
let mut b2: Vec<i32> = vec![];
let mut b3 = vec![1i32, 2, 3];//Sufixing 1st value with data type
```

```rust
let mut b4 = vec![1, 2, 3];
let mut b5: Vec<i32> = vec![1, 2, 3];
let mut b6  = vec![1i32, 2, 3];
let mut b7 = vec![0; 10]; //Ten zeroes
```