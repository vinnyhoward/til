# Switch Case

Switch statement is basically nested if statement, though it does not support expression, it matches an int, string, or boolean data type variable with a given set of cases that are provided by the programmer. It is mainly used in a menu-driven program where the user selects which function they want to run. A switch case in Rust is achieved by the keyword match. Let’s see a few examples to see how it works.

1. Single Variable Matching:

Unlike C or Java, only the case corresponding to the match is executed, so we need not worry about fall through. Thereby saving our effort to write a break statement after each case. Default case, where no match is found, is handled by the case ‘_’ (underscore). There is something special in Rust, the cases can have more than one value. 

### Example:

```rust
fn main() {
  let num 3 ;
  match num{
  1 => println!("One"),
  2 => println!("Two"),
  3 => println!("Three"),
  _ => println!("Rest of the number"),
}
```

### Output

```bash
Three
```

2. Several Values in a single case:

Several values can be included in a single case by separating them via ‘|’.

### Example:

```rust
fn main() {
  let num = 2;
  match num {
  1 | 3 | 5 | 7 | 9 =>println!("Odd"),
  2 | 4 | 6 | 8 => println!("Even"),
  _ => println!("Only one  digit allowed"),
  }
  
}

```
### Output

```bash
Even
```
 It’s not the end we can also include a range of values in each case. 