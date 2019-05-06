# Big O Notation O(n)

```N``` represents the length of the input to your function. Or in layman terms, Big O is way to formalize fuzzy counting. It allows us to talk formally about how the runtime of an algorithm grows as the input grows

Say an algorithm is O(f(n)) if the number of simple operations has do is eventually less than a constant times f(n), as n increases

- f(n) could be linear (f(n) = n)

- f(n) could be quadratic (f(n) = n<sup>2</sup>)

- f(n) could be constant (f(n) = 1)

- f(n) could be something entirely different


## Big Omega

Big Omega is the equivalent concept of `big O` but for lower bound

## Big Theta 

Is both `Big O` and Big Omego combined and in return requires a tight bound run time.

## O(n) Basics

## Worst Case and Approximation 
Always include worst case and average case approximation when writing your function. 
Approximations with the pseudo code above for say an input of say, the alphabet is: 

Average Case:
```O((13 + 3)n + 2) -> O(16n + 2)```

Worst Case:
```O((26 + 3)n + 2) -> O(29n + 2)```

### Intermediate Pseudo Code Example with O(n)

input manatees: a list of "manatees", where one manatee is represented by a dictionary
a single manatee has properties like "name", "age", et cetera
n = the number of elements in "manatees"
m = the number of properties per "manatee" (i.e. the number of keys in a manatee dictionary)


```
def example1(manatees):
    for manatee in manatees:
        print manatee['name']

def example2(manatees):
    print manatees[0]['name']
    print manatees[0]['age']

def example3(manatees):
    for manatee in manatees:
        for manatee_property in manatee:
            print manatee_property, ": ", manatee[manatee_property]

def example4(manatees):
    oldest_manatee = "No manatees here!"
    for manatee1 in manatees:
        for manatee2 in manatees:
            if manatee1['age'] < manatee2['age']:
                oldest_manatee = manatee2['name']
            else:
                oldest_manatee = manatee1['name']
    print oldest_manatee
```

Example 1:
```O(n)```

Example 2:
```O(1)```

Example 3:
```O(nm)```

Example 4:
```O(n^2)```

## Why is Big O Notation O(n) Important?

There are a variety of important reasons why it is important, a high level bullet point overview would be:

- It'ts important to have a precise vocabulary to talk about how the code performs

- Useful for discussing the trade-offs between different approaches

- When your code slows down or crashes, `Big O` helps you identify parts of the code that are inefficient can help a developer find the pain points or a bottle necks within the application

- Less important: it comes up in interviews

Here is a simple example of why `Big O` is so important. Suppose a function that calculates the sum of all numbers from 1 up to (and including) some numbers n.

Example 1:

```
function addUpTo(n) {
  let total = 0; // 1 assignment
  // `let i = 1` 1 assignment 
  // `i <= n` n comparisons
  for (let i = 1; i <= n; i++) { // n additions // n assignments
    total += i; // n additions // n assignments
  };
  return total;
};
// Time Elapsed: 1.8610480509996414 seconds seconds
```

Example 2:

```
function addUpTo(n) {
  return n * (n + 1) / 2; // n multiplicaitons // n additions // n divisions
};
// Time Elapsed: 0.0001473260000348091 seconds
```

### Basic Pseudo Code Example with O(n)

```
function decode(input):
  create output sting <= O(1)
  for each letter in input  <= O(2n)
    get new_letter from letter location in cipher
    add new_letter to output 
  return output <= O(1)
```

The pseudo code example above would be ```O(2n + 2)```
the amount of time needed to run this function depends on this line of code ``` get new_letter from letter location in cipher``` where ```cipher ``` would be anywhere from just 10 to 10 million list checks.

### A javascript example of O(n<sup>2</sup>)

```
const printAllPairs() = () => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    };
  };
};
```

## Simplifying Big O Expressions

When determining the time complexity of an algorithm, there are some helpful rule of thumbs for Big O expressions.

#### Constants Don't Matter

| With Constants | Without Constants | 
| ------------- |:------------- |
| O(2n)        | O(n) | 
| O(500)    | 2O(1)   | 
| O(13n<sup>2</sup>)  | O(n<sup>2</sup>) | 
| O(n + 10)  | O(n) | 
| O(1000n + 50) | O(n) | 
| (n<sup>2</sup> + 5n + 8) | O(n<sup>2</sup>) | 

### Big O Shorthands

Analyzing complexity with `Big O` can get complicated. There are several rules of thumb that can help; these rules won't ALWAYS work, but are a helpful starting point

1. Arithmetic operations are constant

2. Variable assignment is constant

3. Access elements in an array (by index) or object (by key) is constant

4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop

### Simple Test Cases

  |               |               | 
  | ------------- |:------------- |
  | n = 10        | n = 1,000,000 | 
  | 29(10) + 2    | 29(10<sup>6</sup>) + 2  | 
  | 292           | 29,000,000    | 



Cheat Sheet: http://bigocheatsheet.com/
