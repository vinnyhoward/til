# Entry

An `entry point` indicates which module webpack should use to begin building out its internal `dependency graph`. Webpack will figure out which other modules libraries that entry point depends on (directly and indirectly).

By default its value is `./src/index.js` but you can specify a different (or multiple entry points) by setting an `entry` point in the config file. 

For example:

```js
module.exports = {
    entry: './path/to/my/entry/file.js'
}
```
