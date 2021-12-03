// Generate range of integers

// Implement a function named generateRange(min, max, step), which takes three arguments 
// and generates a range of integers from min to max, with the step. The first integer is 
// the minimum value, the second is the maximum of the range and the third is the step. (min < max)

// Task
// Implement a function named

// generateRange(2, 10, 2) // should return iterator of [2,4,6,8,10]
// generateRange(1, 10, 3) // should return iterator of [1,4,7,10]
// Note
// min < max
// step > 0
// the range does not HAVE to include max (depending on the step)

fn main() {
    fn generate_range(min: usize, max: usize, step: usize) -> Vec<usize> {
        let mut cur_count = min;
        let mut range_vec = Vec::new();
        range_vec.push(min);
        
        while cur_count != max {
            cur_count += step;
            if cur_count > max {
                break;
            } else {
                range_vec.push(cur_count);
            }

            println!("boolean -> {}", cur_count != max);
        }
        
        return range_vec;
    }

    println!("{:?}", generate_range(2, 10, 2)); // [2,4,6,8,10]
    println!("{:?}", generate_range(1, 10, 3)); // [1,4,7,10]
    println!("{:?}", generate_range(1, 10, 1)); // [1,2,3,4,5,6,7,8,9,10]
    println!("{:?}", generate_range(1, 10, 4)); // [1,5,9]
    println!("{:?}", generate_range(1, 10, 5)); // [1,6]
}
