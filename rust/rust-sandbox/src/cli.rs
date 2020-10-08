use std::env;

pub fn run() {
    let args: Vec<String> = env::args().collect();
    let command = args[1].clone();
    let name = "Vince";

    println!("Arguments: {:?}", command);
    if command == "greet" {
        println!("Greetings {}", name);
    }
}
