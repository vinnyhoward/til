# Iterators

An iterator helps to iterate over a collection of values such as arrays, vectors, maps, etc. Iterators implement the Iterator trait that is defined in the Rust standard library. The `iter()` method returns an iterator object of the collection. Values in an iterator object are called items. The `next()` method of the iterator can be used to traverse through the items. The next() method returns a value None when it reaches the end of the collection.

The following example uses an iterator to read values from an array.

```rust
fn main() {
   //declare an array
   let a = [10,20,30];

   let mut iter = a.iter(); 
   // fetch an iterator object for the array
   println!("{:?}",iter);

   //fetch individual values from the iterator object
   println!("{:?}",iter.next());
   println!("{:?}",iter.next());
   println!("{:?}",iter.next());
   println!("{:?}",iter.next());
}
```

### Output

```bash
    Iter([10, 20, 30])
    Some(10)
    Some(20)
    Some(30)
    None
```

If a collection like array or Vector implements Iterator trait then it can be traversed using the for...in syntax as shown below:

```rust
fn main() {
   let a = [10,20,30];
   let iter = a.iter();
   for data in iter{
      print!("{}\t",data);
   }
}
```

### Output

```bash
   10 20 30
```

## Illustration:iter()

The iter() function uses the concept of borrowing. It returns a reference to each element of the collection, leaving the collection untouched and available for reuse after the loop.

```rust
fn main() {
   let names = vec!["Kannan", "Mohtashim", "Kiran"];
   for name in names.iter() {
      match name {
         &"Mohtashim" => println!("There is a rustacean among us!"),
         _ => println!("Hello {}", name),
      }
   }
   println!("{:?}",names); 
   // reusing the collection after iteration
}
```

### Output

```bash
Hello Kannan
There is a rustacean among us!
Hello Kiran
["Kannan", "Mohtashim", "Kiran"]
```