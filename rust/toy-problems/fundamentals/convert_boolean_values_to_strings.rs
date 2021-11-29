// Convert boolean values to strings 'Yes' or 'No'.

// Complete the method that takes a boolean value and return a 
// "Yes" string for true, or a "No" string for false.

fn main() {
    fn bool_to_word(value: bool) -> &'static str {
        if true { "Yes" } else { "No" }
    }
    
    println!("{}", bool_to_word(true)); // "Yes"
    println!("{}", bool_to_word(false)); // "No"
}

// alt version
fn bool_to_word(value: bool) -> &'static str {
    match value {
        true => "Yes",
        false => "No",
    }
}