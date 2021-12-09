// Multiplication table for number

// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// For example, a multiplication table (string) for number == 5 looks like below:

// P. S. You can use \n in string to jump to the next line.

// Note: newlines should be added between rows, but there should be no trailing 
// newline at the end. If you're unsure about the format, look at the sample tests.

fn main() {
    fn multi_table(n: u64) -> String {
        let mut product_table = String::new();
    
        for x in 1..11 {
            let mut _current_product = String::new();
            if x != 10 {
                _current_product = format!("{} * {} = {}\n", x, n, x * n)
            } else {
                _current_product = format!("{} * {} = {}", x, n, x * n)
            }
    
            product_table += &_current_product;
        }

        // alternate version that is way better lol
        // fn multi_table(n: u64) -> String {
        //     (1..=10)
        //         .map(|a| format!("{} * {} = {}", a, n, a * n))
        //         .join("\n")
        // }

        return product_table;
    }



    println!("{}", multi_table(5));
    // 1 * 5 = 5
    // 2 * 5 = 10
    // 3 * 5 = 15
    // 4 * 5 = 20
    // 5 * 5 = 25
    // 6 * 5 = 30
    // 7 * 5 = 35
    // 8 * 5 = 40
    // 9 * 5 = 45
    // 10 * 5 = 50
}
