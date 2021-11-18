fn two_oldest_ages(ages: &[u8]) -> [u8; 2] {
    let mut ages = ages.to_vec();
    ages.sort();
    
    [ages[ages.len() - 2], ages[ages.len() - 1]]
}