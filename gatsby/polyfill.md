# Polyfill

Gatsby uses the ES6 Promise API. Because some browsers don’t support this, Gatsby includes a Promise polyfill by default.

If you’d like to provide your own Promise polyfill, you can set polyfill to false.

```js
module.exports = {
  polyfill: false,
};
```
