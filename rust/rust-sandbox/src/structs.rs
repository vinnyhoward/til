// Traditional Struct
struct Color {
    red: u8,
    green: u8,
    blue: u8,
}

// Tuple Struct
struct TupleColor(u8, u8, u8);

struct Person {
    first_name: String,
    last_name: String,
}

impl Person {
    // Construct a person
    fn new_person(first: &str, last: &str) -> Person {
        Person {
            first_name: first.to_string(),
            last_name: last.to_string(),
        }
    }

    fn full_name(&self) -> String {
        format!("{} {}", self.first_name, self.last_name)
    }

    fn set_last_name(&mut self, last: &str) {
        self.last_name = last.to_string()
    }

    // Name to Tuple
    fn to_tuple(self) -> (String, String) {
        (self.first_name, self.last_name)
    }
}

pub fn run() {
    let mut c = Color {
        red: 255,
        green: 0,
        blue: 0,
    };

    c.red = 200;

    let mut tc = TupleColor(255, 0, 0);
    let mut p = Person::new_person("Vincent", "Howard");
    p.set_last_name("Nguyen");
    println!("Color: {} {} {}", c.red, c.green, c.blue);
    println!("Tuple Color: {} {} {}", tc.0, tc.1, tc.2);
    println!("Full Name {}", p.full_name());
    println!("New Person: {} {}", p.first_name, p.last_name);
    println!("Person Tuple {:?}", p.to_tuple());
}

// Reviewing and fixing a pull request for our Evernym teammate for push notificatoins
