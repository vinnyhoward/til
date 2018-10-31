# Asynchronous Iteration

The new form of iteration, to use when iterating over asynchronous iterators is called asynchronous iteration. It is similar to its synchronous counterpart but instead of defining ```[Symbol.iterator]()``` the iterable must instead define ```[Symbol.asyncIterator]()```. The creation of asynchronous iterators is as follows:

  - Asynchronous iteration requires the target object to be iterable

  - An object is iterable if it defines [Symbol.asyncIterator]()

  - ```[Symbol.asyncIterator]()``` must return an ```AsyncIterator```

  - An ```AsyncIterator``` is an object that must at least define a function ```next()```

  - The function ```next()``` must return a promise that resolves with an ```IteratorResult```

  - The IteratorResult is an object with a form ```{value: $value, done: false}```
  
  = When the iterator is finished it must return ```{done: true}```