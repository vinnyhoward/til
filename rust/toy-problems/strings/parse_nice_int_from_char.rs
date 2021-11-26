// Parse nice int from char problem

// Ask a small girl - "How old are you?". She always says 
// strange things... Lets help her!

// For correct answer program should return int from 0 to 9.

// Assume test input string always valid and may look like 
// "1 year old" or "5 years old", etc.. The first char is number only.

fn main() {
    fn get_age(age: &str) -> u32 {
        let num_text = age.chars().nth(0).unwrap().to_string();
        let converted_num: u32 = num_text.parse::<u32>().unwrap();

        converted_num
      }

    println!(get_age("2 years old")); // 2
    println!(get_age("4 years old")); // 4
    println!(get_age("5 years old")); // 5
    println!(get_age("7 years old")); // 7
}


