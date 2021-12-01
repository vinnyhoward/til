// Abbreviate a Two Word Name

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

fn main() {
    fn abbrev_name(name: &str) -> String {
        let mut names = name.split(" ");
        let first = names.next().unwrap();
        let second = names.next().unwrap();
        return first[0..1].to_uppercase().to_string() + "." + &second[0..1].to_uppercase();
    }

    // alt solution
    // fn abbrev_name(name: &str) -> String {
    //     name.split(' ')
    //         .map(|x| x.chars().nth(0).unwrap().to_string().to_uppercase())
    //         .collect::<Vec<_>>()
    //         .join(".")
    //   }
      
    println!("{}", abbrev_name("Sam Harris")); "S.H"
}
