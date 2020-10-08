use std::mem;

pub fn run() {
    let mut numbers: [i32; 4] = [1, 2, 3, 4];

    // Re-assign value
    numbers[2] = 1000;

    println!("{:?}", numbers);

    // Get single value
    println!("Single Value: {}", numbers[2]);

    // Get array length
    println!("Array Length: {}", numbers.len());

    // Arrays are stack allocated
    println!("Array Occupies {} bytes", mem::size_of_val(&numbers));

    // Get slice
    let slice: &[i32] = &numbers[2..4];
    println!("Slice: {:?}", slice);

    println!("{:?}", numbers);
}
