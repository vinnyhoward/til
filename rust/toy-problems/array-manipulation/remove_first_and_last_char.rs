// Remove First and Last Character

// It's pretty straightforward. Your goal is to create a 
// function that removes the first and last characters of 
// a string. You're given one parameter, the original string. 
// You don't have to worry with strings with less than two
// characters.

fn main() {
    pub fn remove_char(s: &str) -> String {
        // create mutable string vector
        let mut chars = s.chars();
        // skips over first index
        chars.next();
        // skips over last index
        chars.next_back();
        // is a generic method to obtain an iterator,
        // whether this iterator yields values, immutable 
        // references or mutable references is context 
        // dependent and can sometimes be surprising.
        chars.into_iter().collect()
    }
    
    
    println!("{}", remove_char("eloquent")); // "loquen"
    println!("{}", remove_char("country")); // "ountr"
    println!("{}", remove_char("person")); // "erso"
}
