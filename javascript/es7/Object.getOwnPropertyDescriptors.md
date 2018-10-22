# Object.getOwnPropertyDescriptors

This method returns all the details (including getter getand setter set methods) for all the properties of a given object. The main motivation to add this is to allow shallow copying / cloning an object into another object that also copies getter and setter functions as opposed to ```Object.assign```.

```Object.assign``` shallow copies all the details except getter and setter functions of the original source object.

The example below shows the difference between ```Object.assign``` and ```Object.getOwnPropertyDescriptors``` along with ```Object.defineProperties``` to copy an original object ```Car``` into a new object ```ElectricCar``` . You’ll see that by using ```Object.getOwnPropertyDescriptors```, discount getter and setter functions are also copied into the target object.

Before: 

```
let Car = {
  name: 'BMW',
  price: 1000000,
  set discount(x) {
    this.d = x;
  },
  get discount() {
    return this.d
  },
  };

  console.log(Object.getOwnPropertyDescriptors(Car. 'discount))
  //Prints
  {
    get: [Function: get],
    set: [Function: set],
    enumerable: true,
    configurable: true
  }

  //Copy Car's properties to ElectricCar using Object.assign
  const ElectricCar = Object.assign({}, Car);

    console.log(Object.ElectricCar(Car. 'discount))
  //Prints
  {
    value: undefined,
    writable: true,
    enumerable: true,
    configurable: true
  }
```

Notice how ```Object.assign``` does not return a ```getter``` or ```setter```, just a shallow copy.

After: 

```
let Car = {
  name: 'BMW',
  price: 1000000,
  set discount(x) {
    this.d = x;
  },
  get discount() {
    return this.d
  },
  };

  const ElectricCar1 = Object.defineProperties({}, Object.getOwnPropertyDescriptors(Car. 'discount));

  console.log(ElectricCar1)
    //Prints
  {
    get: [Function: get],
    set: [Function: set],
    enumerable: true,
    configurable: true
  }

```