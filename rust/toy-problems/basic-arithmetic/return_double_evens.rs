// if the number is even double the number 
// and return the vector


fn main() {
    fn simple_map(num_vec: &[i32]) -> Vec<i32> {
        return num_vec.iter().map(|s| {
            if s % 2 == 0 {
                s * 2
            } else {
                *s
            }
        }).collect();
    }

    println!("{:?}", simple_map(&vec![1, 2, 3, 4, 5, 6, 7, 8]));
}

