# Loaders

Out of the box Webpack only understands Javascript and JSON files. `Loaders` allow webpack to process other types of files and convert them into valid `modules` that can be consumed by your application and added to your dependency graph.

At a high level, `loaders` have two properties in your webpack configuration:

1.) The `test` property identifies which file or files should be transformed.

2.) The `use` property indicates which loader should be used to do the transforming.

__TL DR: A loader is a function that takes in a source and outputs a modified source.__

## webpack.config.js

```js
const path = require('path');

module.exports = {
  output: {
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  }
};
```

## Other configurations

```js
module: {
    rules: [
        {
            test: regex,
            use: (Array|String}Function),
            include: RegExp[],
            exclude: RegExp[],
            issuer: (RegExp|String)[],
            enforce: "pre"|"post",
        },
    ],
};
```
