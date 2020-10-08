pub fn run() {
    // Print to console
    println!("Hello from the print.rs file :D");

    // Basic formatting
    println!("My favorite manga is {}", "Berserk");

    // Positional arguments
    println!(
        "{0} is from {2} and {0} likes to {1}",
        "Vince", "code", "Salt Lake City"
    );

    // Named arguments
    println!(
        "{name} likes to play {activity}",
        name = "Vince",
        activity = "StarCraft 2"
    );

    // Placeholder traits
    println!("Binary: {:b} Hex: {:x} Octal: {:o}", 10, 10, 10);

    // Placeholder for debug traits using a tuple
    println!("{:?}", (12, true, "banana", false));

    // Basic math
    println!("10 * 1000000 = {}", 10 * 1000000);
}
