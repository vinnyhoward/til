// Reversed Strings

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

fn main() {

    fn solution(phrase: &str) -> String {
        phrase.chars().rev().collect()
    }

    println!("{}", solution("hello world"));

    // alt solution
    // fn solution(phrase: &str) -> String {
    //     return phrase.chars().rev().collect::<String>();
    // }
}
