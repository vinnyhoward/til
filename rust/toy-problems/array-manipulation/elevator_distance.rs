// Elevator Distance

// Imagine you start on the 5th floor of a building, then travel down to the 2nd floor, then back up to the 8th floor. You have travelled a total of 3 + 6 = 9 floors of distance.

// Given an array representing a series of floors you must reach by elevator, return an integer representing the total distance travelled for visiting each floor in the array in order.

// // simple examples
// elevatorDistance([5,2,8]) = 9
// elevatorDistance([1,2,3]) = 2
// elevatorDistance([7,1,7,1]) = 18

// // if two consecutive floors are the same,
// //distance travelled between them is 0
// elevatorDistance([3,3]) = 0
// Array will always contain at least 2 floors. Random tests will contain 2-20 elements in array, and floor values between 0 and 30.

fn main() {
    fn elevator_distance(floors: &[i16]) -> i16 {
        let mut dist: i16 = 0;
        for i in 0..floors.len() - 1{
            dist += (floors[i] - floors[i + 1]).abs();
        }
        dist
    }
    
    println!("{:?}", elevator_distance(&[5, 2, 8])); // 9
    println!("{:?}", elevator_distance(&[1, 2, 3])); // 2
    println!("{:?}", elevator_distance(&[7, 1, 7, 1])); // 18
}
