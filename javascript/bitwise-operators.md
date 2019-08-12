# Bitwise Operations

## JavaScript Uses 32 bits Bitwise Operands

JavaScript stores numbers as 64 bits floating point numbers, but all bitwise operations are performed on 32 bits binary numbers.

Before a bitwise operation is performed, JavaScript converts numbers to 32 bits signed integers.

After the bitwise operation is performed, the result is converted back to 64 bits JavaScript numbers.

## Bitwise AND
When a bitwise AND is performed on a pair of bits, it returns 1 if both bits are 1.

One bit example:

```
0 & 0	0
0 & 1	0
1 & 0	0
1 & 1	1
```

4 bits examples:

```
1111 & 0000	0000
1111 & 0001	0001
1111 & 0010	0010
1111 & 0100	0100
```