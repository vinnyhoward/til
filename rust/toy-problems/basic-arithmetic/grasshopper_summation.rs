// Grasshopper - Summation

// Write a program that finds the summation of every number from 1 to num. 
// The number will always be a positive integer greater than 0.

fn main() {
    fn summation(n: i32) -> i32 {
        let mut num_count: i32 = 0;
        
        for i in 0..n + 1 {
            println!("{} iteration", i);
            
            num_count += i;
        }
        
        num_count
    }    

    println!("{}", summation(1)); // 1;
    println!("{}", summation(8)); // 36;
    println!("{}", summation(22)); // 253;
}
