// Count the Monkeys!

// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

// For example:

// monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// monkeyCount(1) // --> [1]

// Silly Addition - 16 + 18 = 214

// For this kata you will have to forget how to add two numbers.

// It can be best explained using the following meme:

// https://knowyourmeme.com/memes/girl-at-whiteboard-adding

// In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

// You may assume both integers are positive integers.

fn main() {
    fn monkey_count(n: i32) -> Vec<i32> {
        let mut monkeys_count = Vec::new();
        for x in 1..n + 1 {
            monkeys_count.push(x);
        }
        return monkeys_count;
    }

    // alt version
    // fn monkey_count(n: i32) -> Vec<i32> {
    //     (1..=n).collect()
    // }

    // fn monkey_count(n: u32) -> Vec<u32> {
    //     if n == 0 {
    //         return vec![];
    //     }
        
    //     (1..=n).collect()
    // }

    println!("{:?}", monkey_count(10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    println!("{:?}", monkey_count(1)); // [1]
}