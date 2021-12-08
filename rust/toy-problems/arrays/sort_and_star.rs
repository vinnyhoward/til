fn two_sort(arr: &[&str]) -> String {
    arr.iter().min().unwrap().chars().map(|c| c.to_string()).collect::<Vec<_>>().join("***")
}