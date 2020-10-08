/*
Conditionals - Used to check the condition of something and act accordingly
*/

pub fn run() {
    let age: u8 = 21;
    let check_id: bool = false;
    let knows_person_of_age = true;

    // if/else
    if age >= 21 && check_id || knows_person_of_age {
        println!("Bartender: What would you like to drink?");
    } else if age < 21 && check_id {
        println!("Brander: Sorry you're too young. Get the hell out of my bar")
    } else {
        println!("Brander: Give me your ID or else")
    }

    // Shorthand if
    let is_of_age = if age >= 21 { true } else { false };
    println!("{}", is_of_age);
}
