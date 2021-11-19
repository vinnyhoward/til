// Third Angle of a Triangle

// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

fn main() {
    fn other_angle(a: u32, b: u32) -> u32 {
        180 - a - b
    }

    println!("{}", other_angle(30, 60)); // 90
    println!("{}", other_angle(60, 60)); // 60
    println!("{}", other_angle(43, 78)); // 59
}

