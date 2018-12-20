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

The type-checker does not require that these properties come in any sort of order, only that the properties the interface requires are present and have the required type.

## Optional Properties

Not all properties of an ```interface``` may be required. Some exist under certain conditions or may not be there at all. These optional properties are popular when creating patterns like “option bags” where you pass an object to a function that only has a couple of properties filled in.

Here’s an example of this pattern:

```
interface SomeConfig {
    color?: string;
    width?: number;
}

function createConfig(config: SomeConfig): {color: string; area: number} {
    let newConfig = {color: "white", area: 100};
    if (config.color) {
        newConfig.color = config.color;
    }
    if (config.width) {
        newConfig.area = config.width * config.width;
    }
    return newConfig;
}

let myNewConfig = createConfig({color: "black"});
```

```Interfaces``` with ```optional properties``` are written similar to other ```interfaces```, with each optional property denoted by a ```?``` at the end of the property name in the declaration.