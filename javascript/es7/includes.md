# Includes 

```Includes``` is a simple instance method on an ```array```, it helps to easily find if an item in an ```array``` exists. 
(including ```NaN``` unlike ```indexOf```)

Example use case of ```includes```:
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