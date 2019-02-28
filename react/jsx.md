# JSX 

JSX is a technology that was introduced by React.

Although React can work completely fine without using JSX, it’s an ideal technology to work with components, so React benefits a lot from JSX.

At first, you might think that using JSX is like mixing HTML and JavaScript (and as you’ll see CSS).

But this is not true, because what you are really doing when using JSX syntax is writing a declarative syntax of what a component UI should be.

And you’re describing that UI not using strings, but instead using JavaScript, which allows you to do many nice thing

## A JSX primer

Here is how you define a h1 tag containing a string:

```const element = <h1>Hello, world!</h1>```

It looks like a strange mix of JavaScript and HTML, but in reality it’s all JavaScript.

What looks like HTML, is actually syntactic sugar for defining components and their positioning inside the markup.

Inside a JSX expression, attributes can be inserted very easily:

```
const myId = 'test'
const element = <h1 id={myId}>Hello, world!</h1>
```

You just need to pay attention when an attribute has a dash (-) which is converted to camelCase syntax instead, and these 2 special cases:

- ```class``` becomes ```className```
- ```for``` becomes ```htmlFor```

because they are reserved words in JavaScript.

Here’s a JSX snippet that wraps two components into a div tag:

```
<div>
  <BlogPostsList />
  <Sidebar />
</div>
```

A tag always needs to be closed, because this is more XML than HTML (if you remember the XHTML days, this will be familiar, but since then the HTML5 loose syntax won). In this case a self-closing tag is used.

Notice how I wrapped the 2 components into a div. Why? Because the render() function can only return a single node, so in case you want to return 2 siblings, just add a parent. It can be any tag, not just div.'

## Transpiling JSX

A browser cannot execute JavaScript files containing JSX code. They must be first transformed to regular JS.

How? By doing a process called transpiling.

We already said that JSX is optional, because to every JSX line, a corresponding plain JavaScript alternative is available, and that’s what JSX is transpiled to.

For example the following two constructs are equivalent:

## Plain JS

```
ReactDOM.render(
  React.DOM.div(
    { id: 'test' },
    React.DOM.h1(null, 'A title'),
    React.DOM.p(null, 'A paragraph')
  ),
  document.getElementById('myapp')
)
```

## JSX

```
ReactDOM.render(
  <div id="test">
    <h1>A title</h1>
    <p>A paragraph</p>
  </div>,
  document.getElementById('myapp')
)
```

This very basic example is just the starting point, but you can already see how more complicated the plain JS syntax is compared to using JSX.

At the time of writing the most popular way to perform the transpilation is to use Babel, which is the default option when running create-react-app, so if you use it you don't have to worry, everything happens under the hood for you.

If you don’t use create-react-app you need to setup Babel yourself.