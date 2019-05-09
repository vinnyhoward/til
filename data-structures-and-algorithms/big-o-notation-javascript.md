# Big O Notation in JavaScript

## Arrays

Let’s now explore the most common types of Big O Notations, we will be using JavaScript (ECMA6) as our reference language but the same principle applies to any other.

## Constant-Time Algorithm

__O(1) — “Order 1”__

You will see this on algorithms that returns an element in an already known position of an array, regardless kind or length

Example code:

```
const getLast = items =>
  items[items.length-1];
```

Example case:

```
getLast(['a', 'b', 'c', 'd']); // d (1 iteration)
getLast(['a', 'b', 'c', 'd', 'e', 'f', 'g']);// g(1 iteration)
```

## Linear-Time Algorithm

__O(N) — “Order N”__

The worst case time (iterations) grows on par with the number of items.

In other words, for `N` elements we will require N` iterations.

Example code:

```
const findIndex = (items, match) => {
  for (let i = 0, total = items.length; i < total; i++)
    if (items[i] == match)
      return i;
   return -1;
};
```

Example case:

```
const array= ['a', 'b', 'c', 'd'];
findIndex(array, 'a'); // 0  (1 iteration - best case)
findIndex(array, 'd'); // 3  (4 iterations - worst case)
findIndex(array, 'e'); // -1 (4 iterations - worst case)
```

## Quadratic-Time Algorithm

__O(N 2 ) — “Order N squared”__

For this kind of order, the worst case time (iterations) is the square of the number of inputs. The time grows exponentially related to the number of inputs.

Example code:

```
const buildSquareMatrix = items => {
  let matrix = [];
  for (let i = 0, total = items.length; i < total; i++){ 
    matrix[i] = [];
    for (let j = 0, total = items.length; j < total; j++)
      matrix[i].push(items[j]);
  }
  return matrix;
};
```

Example case:

```
buildSquareMatrix(['a', 'b', 'c']); 
/* 9 iterations for 3 elements, returns:
[
  ['a', 'b', 'c'],
  ['a', 'b', 'c'],
  ['a', 'b', 'c']
]
/*
```

## Logarithmic-Time Algorithm

__O(log n) — “Order log N”__

These are the holy grail of search/sort algorithms, they are usually the most efficient approach when dealing with large collections. Instead of looking through the components one by one, they split the data in chunks and discard a large amount on every iteration, usually the half, or log base 2.

Assuming we are using a log base 2, we could -ideally- find a specific element in a collection of one million elements using less than 20 iterations, if we scale the size of the collection to a billion we would require only less than 30 iterations.

With big data being more common every day, it’s easy to see the advantage of this kind of algorithms since the larger the collection, the more relative efficiency they provide.

The most popular of this algorithms is the Quicksort algorithm, which can be used to find a specific element or sort a list very efficiently. Another popular example of this order is the Merge-Sort algorithm. We will explore these algorithms on future articles.

Example code:

```
const quickSort = list => {
  if (list.length < 2) 
    return list;
  let pivot = list[0];
  let left  = []; 
  let right = [];
  for (let i = 1, total = list.length; i < total; i++){
    if (list[i] < pivot)
      left.push(list[i]);
    else
      right.push(list[i]);
  }
  return [
    ...quickSort(left), 
    pivot, 
    ...quickSort(right)
  ];
};
```

Example case:

```
quickSort( ['q','a','z','w','s','x','e','d','c','r']);
// ["a", "c", "d", "e", "q", "r", "s", "w", "x", "z"]
```

## Conclusion

In a nutshell arrays generally follow these guidelines:

- Insertion - It depends

- Removal - It depends

- Searching - O(N)

- Access - O(n)
