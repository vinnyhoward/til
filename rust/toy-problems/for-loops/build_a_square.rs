// Build a square

// I will give you an integer. Give me back a shape that is as 
// long and wide as the integer. The integer will be a whole 
// number between 1 and 50.

fn main() {
    fn generate_shape(n: usize) -> String {
        println!("{:?}", vec!["+".repeat(n); n]);
        vec!["+".repeat(n); n].join("\n")
    }
    
    println!("{}", generate_shape(3)); // "+++\n+++\n+++"
    println!("{}", generate_shape(5)); // "+++++\n+++++\n+++++\n+++++\n+++++"
}
