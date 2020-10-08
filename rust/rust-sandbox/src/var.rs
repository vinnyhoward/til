pub fn run() {
    let name = "Vince";
    let mut age = 29;

    println!("My name is {} and I am {} years old", name, age);

    age = 30;

    // Define a constant
    const userId: i32 = 001;
    println!("User ID is {}", userId);

    // Assign multiple vars
    let (my_name, my_age) = ("Vince", 29);
    println!("{} is {}", my_name, my_age);
}
