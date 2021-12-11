// Silly Addition - 16 + 18 = 214

// For this kata you will have to forget how to add two numbers.

// It can be best explained using the following meme:

// https://knowyourmeme.com/memes/girl-at-whiteboard-adding

// In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

// You may assume both integers are positive integers.

fn main() {
    fn add(mut x: u32, mut y: u32) -> u64 {
        let mut res = 0;
        let mut m = 1;
        while x != 0 || y != 0 {
            let s = x % 10 + y % 10;
            res += s as u64 * m;
            m *= if s < 10 { 10 } else { 100 };
            x /= 10;
            y /= 10;
        }
        res
    }

    println!("{}", add(16, 18)); // 214
    println!("{}", add(26, 39)); // 515
    println!("{}", add(122, 81)); // 1103
}