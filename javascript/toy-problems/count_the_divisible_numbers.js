// Count the divisible numbers

// Write function divisibleCount(x, y, k) that takes in 3 numbers x, y and k, 
// and returns the number of integers within the range [x..y] that are divisible 
// by k i.e.:

// { i : x ≤ i ≤ y, i mod k = 0 }

// For example:
// x = 6, y = 11 and k = 2, your function should return 3, because there are three 
// numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.

const divisibleCount = (x, y, k) => {
    let count = 0;
    for (let i = x; i < y; i++) {
        console.log(i)
        if (i % k === 0) count++;
    }
    return count;
}



//  console.log(divisibleCount(6,11,2)) // 3
//  console.log(divisibleCount(20, 20, 8)) // 1
 console.log(divisibleCount(11, 14, 2)) // 10
//  console.log(divisibleCount(101, 9007199254740991, 11)) // 2