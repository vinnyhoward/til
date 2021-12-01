// Find the middle element

// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of 
// the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

fn main() {
    fn gimme(input_array: [i32;3]) -> usize {
        // create new reference of array that is mutable
        let mut input_mut_array = input_array.clone();
        // sort new instance of reference
        input_mut_array.sort();
        // use "position" method from the "iter" function to find index
        input_mut_array.iter().position(|&x| x == input_mut_array[1]).unwrap()
    }
      
    println!("{}", gimme([2, 3, 1])); // 0
    println!("{}", gimme([-2, -3, -1])); // 0
    println!("{}", gimme([5, 10, 14])); // 1
}
