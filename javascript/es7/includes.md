# Includes 

```Includes``` is a simple instance method on an ```array```, it helps to easily find if an item in an ```array``` exists. The return value is a ```Boolean``` if the value of the ```searchElement``` is found within the ```array.
(including ```NaN``` unlike ```indexOf```)

## Syntax

```arr.includes(searchElement[, fromIndex])```

```Search Element```: The element to search for

```fromIndex```: The position in this array at which to begin searching for the ```searchElement```. A negative value searches from the index of ```array.length - fromIndex``` by asc. Defaults to 0.

The old method compared to how the new method:
```
const arr = [1, 2, 3, 4, 5, 6, 7, NaN]

//Old syntax
if(arr.indexOf(3) >= 0) {
  console.log(true)
}

//New Syntax
if(arr.includes(3)) {
  console.log(true)
}

arr.includes(NaN) //True
arr.indexOf(NaN) //-1 (does not work for NaN)
```

Other examples include:
```
[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true
```