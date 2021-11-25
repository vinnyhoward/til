fn main() {
    fn multiply_and_return_diff_type(x: i64, y: u8) -> i64 {
        return x * (y as i64);
    }

    println!("{}", multiply_and_return_diff_type(2, 2)) // 1
}


