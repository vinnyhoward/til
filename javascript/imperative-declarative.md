# Imperative vs Declarative

These two types of programming can roughly be summarized as:

- Imperative: Programming paradigm that uses statements that change a program’s state.

_```Imperative Programming``` is like your friend listening to Bob Ross tell them how to paint a landscape. While good ole Bob Ross isn’t exactly commanding, he is giving them step by step directions to get the desired result._

- Declarative: Programming paradigm that expresses the logic of a computation without describing its control flow.

_```Declarative Programming``` is like asking your friend to draw a landscape. You don’t care how they draw it, that’s up to them._



A common example of declarative programming is CSS. The developer specifies CSS properties that describe what something should look like rather than how to achieve it. The "how" is abstracted away by the browser.

On the other hand, imperative programming involves the steps required to achieve something. In JavaScript, the differences can be contrasted like so:

Imperative Javascript Example:

```
const numbers = [1, 2, 3, 4, 5]
const numbersDoubled = []
for (let i = 0; i < numbers.length; i++) {
  numbersDoubled[i] = numbers[i] * 2
}
```
Imperative React Example:

```
const container = document.getElementById(‘container’);
const btn = document.createElement(‘button’);
btn.className = ‘btn red’;
btn.onclick = function(event) {
 if (this.classList.contains(‘red’)) {
   this.classList.remove(‘red’);
   this.classList.add(‘blue’);
 } else {
   this.classList.remove(‘blue’);
   this.classList.add(‘red’);
 }
};
container.appendChild(btn);
```

Manually loop over the numbers of the array and assign the new index as the number doubled.

Declarative Javascript Example:

```
const numbers = [1, 2, 3, 4, 5]
const numbersDoubled = numbers.map(n => n * 2)
```

Declarative React Example:

```
class Button extends React.Component{
  this.state = { color: 'red' }
  handleChange = () => {
    const color = this.state.color === 'red' ? 'blue' : 'red';
    this.setState({ color });
  }
  render() {
    return (<div>
      <button 
         className=`btn ${this.state.color}`
         onClick={this.handleChange}>
      </button>
    </div>);
  }
}
```

We declare that the new array is mapped to a new one where each value is doubled.

- Declarative programming often works with functions and expressions. Imperative programming frequently uses statements and relies on low-level features that cause mutations, while declarative programming has a strong focus on abstraction and purity.

- Declarative programming is more terse and easier to process at a glance.