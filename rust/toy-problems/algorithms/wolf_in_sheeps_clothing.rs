fn warn_the_sheep(queue: &[&str]) -> String {
    match queue.iter().rev().position(|&a| a == "wolf").unwrap() {
        0 => format!("Pls go away and stop eating my sheep"),
        n => format!("Oi! Sheep number {}! You are about to be eaten by a wolf!", n)
    }
}