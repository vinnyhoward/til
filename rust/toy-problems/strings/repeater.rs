// Thinkful - String Drills: Repeater

// Write a function named repeater() that takes two arguments (a string and a number), 
// and returns a new string where the input string is repeated that many times.

// Example: (Input1, Input2 --> Output)
// "a", 5 --> "aaaaa"

fn main() {
    fn repeater(string: &str, n: u32) -> String {
        let repeat_vec = vec![string; n as usize];
        return repeat_vec.join("").to_string();
    }

    // bette alt version
    // fn repeater(string: &str, n: u32) -> String {
    //     string.repeat(n as usize)
    // }

    println!("{}", repeater("a", 5)); // "aaaaa"
    println!("{}", repeater("Na", 16)); // "NaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNa"
    println!("{}", repeater("Wub ", 6)); // "Wub Wub Wub Wub Wub Wub "
}
