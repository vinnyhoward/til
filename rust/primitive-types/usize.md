# Primitive Type `usize`

The pointer-sized unsigned integer type.

The size of this primitive is how many bytes it takes to reference any location in memory. For example, on a 32 bit target, this is 4 bytes and on a 64 bit target, this is 8 bytes.

## What is the difference between `usize` and `u32`?

As the documentation states `usize` is pointer-sized, thus its actual size depends on the architecture you are compiling your program for.

As an example, on a 32 bit x86 computer, `usize = u32`, while on x86_64 computers, `usize = u64`.

`usize` gives you the guarantee to be always big enough to hold any pointer or any offset in a data structure, while `u32` can be too small on some architectures.