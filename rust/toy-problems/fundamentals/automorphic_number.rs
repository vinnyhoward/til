fn automorphic(n: u64) -> String {
    if n.pow(2).to_string().ends_with(&n.to_string()) {
        String::from("Automorphic")
    } else {
        String::from("Not!!")
    }
}