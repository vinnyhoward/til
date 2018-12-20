# Interfaces

TypeScripts core principles is that type-checking focuses on shape that values have, also called ```duck typing``` or ```structural typing```. 

Simple example without ```interface```:

```
const printMe = (labelledObj: { label: string }) => {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printMe(myObj);
```
Simple with ```interface```:

```
interface LabelledValue {
    label: string;
}

const printMe = (labelledObj: LabelledValue) => {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printMe(myObj);
```