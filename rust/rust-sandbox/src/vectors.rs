use std::mem;

pub fn run() {
    let mut numbers: Vec<i32> = vec![1, 2, 3, 4];

    // Re-assign value
    numbers[2] = 1000;

    // Add on to vector
    numbers.push(5);
    numbers.push(9999);

    // Remove last value
    numbers.pop();

    println!("{:?}", numbers);

    // Get single value
    println!("Single Value: {}", numbers[2]);

    // Get vector length
    println!("Vector Length: {}", numbers.len());

    // Vectors are stack allocated
    println!("Vector Occupies {} bytes", mem::size_of_val(&numbers));

    // Get slice
    let slice: &[i32] = &numbers[2..4];
    println!("Slice: {:?}", slice);

    println!("{:?}", numbers);

    // Looping through vector values
    for x in numbers.iter() {
        println!("Number {}", x);
    }

    // Looping through and mutating vector values
    for x in numbers.iter_mut() {
        *x *= 2;
    }
    println!("Numbers Vec Multiplied: {:?}", numbers);
}
