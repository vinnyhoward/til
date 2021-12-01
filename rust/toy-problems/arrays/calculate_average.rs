fn main() {
    let input = [
        17.0, 16.0, 16.0, 16.0, 16.0, 15.0, 17.0, 17.0, 15.0, 5.0, 17.0, 17.0, 16.0,
    ];

    fn find_average(slice: &[f64]) -> f64 {
        let total: f64 = slice.iter().sum();
        if slice.len() > 0 {
            return total / slice.len() as f64;
        }
        0.0
    }
    
    println!("{:?}", find_average(&input));
}