// Name Shuffler

// Write a function that returns a string in which firstname is swapped with last name.

// name_shuffler("john McClane"); => "McClane john"

fn main() {
    fn name_shuffler(s: &str) -> String {
        let split_string: Vec<&str> = s.split_whitespace().collect();
        let first_name = split_string[0];
        let last_name = split_string[1];
        let full_name = format!("{} {}", last_name, first_name);

        return full_name;
    }

    // alt solution
    // fn name_shuffler(s: &str) -> String {
    //     s.rsplit(" ").collect::<Vec<&str>>().join(" ")
    // }
    println!("{:?}", name_shuffler("john McClane")); // "McClane john"
    println!("{:?}", name_shuffler("Mary jeggins")); // "jeggins Mary"
    println!("{:?}", name_shuffler("tom jerry")); // "jeggins Mary"
}
