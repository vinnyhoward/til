# `chars()`

Returns an iterator over the `chars` of a string slice.

As a string slice consists of valid UTF-8, we can iterate through a string slice by char. This method returns such an iterator.

It’s important to remember that `char` represents a Unicode Scalar Value, and might not match your idea of what a ‘character’ is. Iteration over grapheme clusters may be what you actually want. This functionality is not provided by Rust’s standard library, check crates.io instead.