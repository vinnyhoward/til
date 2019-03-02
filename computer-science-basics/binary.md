# Binary 

Binary is a base 2 number system invented by Gottfried Leibniz that is made up of only two numbers: 0 and 1. This number system is the basis for all binary code, which is used to write data such as the instructions that computer processors use, or the digital text you read every day.

## How does binary work?

The 0s and 1s in binary are used to represent OFF or ON respectively, that is, the turn off or turn on of an electrical signal or base2 exponent

## Why do computers use binary?

Binary is still the primary language for computers for the following reasons.

- It is a simple and elegant design.
- Binary's 0 and 1 method is quick to detect an electrical signal's off or on state.
- The positive and negative poles of magnetic media are quickly translated into binary.
- Binary is the most efficient way to control logic circuits.

## How to read binary numbers

The following chart illustrates the binary number 01101000. Each column represents the number two raised to an exponent, with that exponent's value increasing by one as you move through each of the eight positions. In this example, we get the total value by reading the chart from right to left and adding each column's value to that of the previous column: (8+32+64) = 104. As you can see, we do not count the bits with a 0 because they're "turned off."

| Exponent  | 2 <sup>7</sup>| 2 <sup>6</sup>| 2 <sup>5</sup>| 2 <sup>4</sup>| 2 <sup>3</sup>| 2 <sup>2</sup>| 2 <sup>1</sup>| 2 <sup>0</sup>|
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| Value  | 128  | 64  | 32 | 16  | 8  | 4  | 2  | 1  |
| ON/OFF  | 0 | 1  | 1  | 0  | 1 | 0  | 0  | 0  |

The next example is 11111111 in binary, the maximum 8-bit value of 255. Again, reading right to left we have 1 + 2 + 4 + 8 + 16 + 32 + 64 + 128 = 255.

| Exponent  | 2 <sup>7</sup>| 2 <sup>6</sup>| 2 <sup>5</sup>| 2 <sup>4</sup>| 2 <sup>3</sup>| 2 <sup>2</sup>| 2 <sup>1</sup>| 2 <sup>0</sup>|
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| Value  | 128  | 64  | 32 | 16  | 8  | 4  | 2  | 1  |
| ON/OFF  | 1 | 1  | 1  | 1  | 1 | 1  | 1  | 1  |

- Counting on a computer normally starts with 0 instead of 1. Therefore, counting all the bits does equal 255, but if you start at 0, it is really 256.

- If you took the binary code from the first example (which totaled 104) and put it into ```ASCII```, it would produce a lowercase h. To spell the word hi, you would need to add the binary for the letter i, which is 01101001. Putting these two codes together, we have ```0110100001101001``` or ```104``` and ```105```, which represents hi.