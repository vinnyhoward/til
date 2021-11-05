// Is n divisible by x and y?

// Examples:
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

fn is_divisible(n: i32, x: i32, y: i32) -> bool {
    if n % x == 0 && n % y == 0 {
        return true;
    } else {
        return false;
    }
}