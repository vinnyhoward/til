// Square(n) Sum

// Complete the square sum function so that it squares each number passed into it 
// and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

fn main() {
    fn square_sum(vec: Vec<i32>) -> i32 {
        let mut sum_vec: i32 = 0;

        for x in 0..vec.len() {
            let squared_number = vec[x].pow(2);
            sum_vec += squared_number;
        }
        return sum_vec;
    }

    // alt solution
    // fn square_sum(vec: Vec<i32>) -> i32 {
    //     vec.iter().map(|s| s * s).sum()
    // }

    println!("{:?}", square_sum(vec![1, 2])); // 5
    println!("{:?}", square_sum(vec![-1, -2])); // 5
    println!("{:?}", square_sum(vec![5, 3, 4])); // 50
}
