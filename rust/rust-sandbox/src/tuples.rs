// Tuples group together values of different types
// Max 12 elements

pub fn run() {
    let person: (&str, &str, i8) = ("Vince", "Taylorsville", 29);

    println!(
        "{} is from {} and he is {} years old and counting :)",
        person.0, person.1, person.2
    );
}
