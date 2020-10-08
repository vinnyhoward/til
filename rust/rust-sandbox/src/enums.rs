// Enums are types which have a defined values

enum Movement {
    // Variants
    Up,
    Down,
    Left,
    Right,
}

fn move_avatar(m: Movement) {
    // Perform an action depending on the moment
    match m {
        Movement::Up => println!("Avatar has moved Up!"),
        Movement::Down => println!("Avatar has moved Down!"),
        Movement::Left => println!("Avatar has moved Left!"),
        Movement::Right => println!("Avatar has moved Right!"),
    }
}

pub fn run() {
    let avatar_one = Movement::Left;
    let avatar_two = Movement::Up;
    let avatar_three = Movement::Right;
    let avatar_four = Movement::Down;
    let avatar_five = Movement::Left;

    move_avatar(avatar_one);
    move_avatar(avatar_two);
    move_avatar(avatar_three);
    move_avatar(avatar_four);
    move_avatar(avatar_five);
}
