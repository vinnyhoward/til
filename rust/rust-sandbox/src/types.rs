/*
Primitive Types:

Integers: u8, i8, i16, u32, i32, u64, i64, u128, i128 (number of bits they take in memory)
Floats: f32, f64
Boolean (bool)
Characters (char)
Tuples
Arrays

Rust is a statically typed language, which mean that it must know the types of all variables at compile time,
however, the compiler can usually infer what type we want based on the value and how we use it
*/

pub fn run() {
    // Default
    let _x = 1;

    // Default is "f64"
    let _y = 2.5;
    // Add Explicit Type
    let _z: i64 = 45454545454545;

    // Find max size
    println!("Max i32: {}", std::i32::MAX);
    println!("Max i64: {}", std::i64::MAX);

    // Boolean
    let is_active: bool = true;

    // Get boolean from expression
    let is_greater: bool = _z > _x;

    let a1 = 'a';
    let emoji = '\u{1f600}';

    println!("{:?}", (_x, _y, _z, is_active, is_greater, a1, emoji))
}
