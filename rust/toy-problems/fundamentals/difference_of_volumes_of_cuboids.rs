// Difference of Volumes of Cuboids

// In this simple exercise, you will create a program that will take two 
// lists of integers, a and b. Each list will consist of 3 positive integers above 0, 
// representing the dimensions of cuboids a and b. You must find the difference of 
// the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), 
// the volume of a is 12 and the volume of b is 20. Therefore, the 
// function should return 8.

// Your function will be tested with pre-made examples as well as 
// random ones.

// If you can, try writing it in one line of code.

fn main() {
    fn find_difference(a: &[i32; 3], b: &[i32; 3]) -> i32 {
        let sum_a: i32 = a.iter().product::<i32>();
        let sum_b: i32 = b.iter().product::<i32>();

        sum_a - sum_b
    }
    
    println!("{}", find_difference(&[3, 2, 5], &[1, 4, 4])); // 14
    println!("{}", find_difference(&[9, 7, 2], &[5, 2, 2])); // 106
    println!("{}", find_difference(&[11, 2, 5], &[1, 10, 8])); // 30
}


// Alternate answer this is more clear and better practice

// type Cuboid = [i32; 3];

// fn find_difference(a: &Cuboid, b: &Cuboid) -> i32 {
//     (volume(a) - volume(b)).abs()
// }

// fn volume(c: &Cuboid) -> i32 {
//     c[0] * c[1] * c[2]
// }