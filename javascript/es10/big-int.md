# BigInt — Arbitrary precision integers

## BigInt is the 7th primitive type.

```BigInt``` is an arbitrary-precision integer. What this means is that variables can now represent ```2⁵³``` numbers. And not just max out at ```9007199254740992```.

```
const b = 1n; // append n to create a BigInt
```

In the past integer values greater than ```9007199254740992``` were not supported. If exceeded, the value would simply lock to ```MAX_SAFE_INTEGER + 1```:

```
const limit = Number.MAX_SAFE_INTEGER;
⇨ 9007199254740991
limit + 1;
⇨ 9007199254740992
limit + 2;
⇨ 9007199254740992 <--- MAX_SAFE_INTEGER + 1 exceeded
const larger = 9007199254740991n;
⇨ 9007199254740991n
const integer = BigInt(9007199254740991); // initialize with number
⇨ 9007199254740991n
const same = BigInt("9007199254740991"); // initialize with "string"
⇨ 9007199254740991n
```

### typeof

```
typeof 10;
⇨ 'number'
typeof 10n;
⇨ 'bigint'
```

### Equality operators can be used between the two types:

```
10n === BigInt(10);
⇨ true
10n == 10;
⇨ true
```

### Math operators only work within its own type:

```
200n / 10n
⇨ 20n
200n / 20
⇨ Uncaught TypeError:
   Cannot mix BigInt and other types, use explicit conversions <
```

### Leading — works, but + doesn’t:

```-100n
⇨ -100n
+100n
⇨ Uncaught TypeError:
  Cannot convert a BigInt value to a number
```
