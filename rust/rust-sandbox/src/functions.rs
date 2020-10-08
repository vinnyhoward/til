pub fn run() {
    greeting("Hola", "Vincent");

    // Bind function values to variables
    let get_sum = add(10, 5200);
    println!("{}", get_sum);

    // Closure
    let n3: i32 = 1;
    let add_int = |n1: i32, n2: i32| n1 + n2 + n3;
    println!("Closure Sum: {}", add_int(9990, 9));
}

fn greeting(greet: &str, name: &str) {
    println!("{} {}, nice to meet you!", greet, name);
}

// Explicit: Use a return keyword with a ending semi-colon
// Implicit: No return key word with no ending semi-colon
fn add(n1: i32, n2: i32) -> i32 {
    n1 + n2
}
