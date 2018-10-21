# Promise.Prototype.finally()

```Promises``` have been around since ES2015 and it was a huge improvement for asynchronous Javascript. Now it will have something that has been implemented in many libraries which is the .finally() method, which is a callback function for when the Promise is ```fulfilled``` or ```rejected```. We can expect the same behavior of the ```try/catch/finally```, where ```finally``` will always be executed:

```
promise
.then(result => {···})
.catch(error => {···})
.finally(() => {···})
```