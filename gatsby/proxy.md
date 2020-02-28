# Proxy

Setting the proxy config option will tell the develop server to proxy any unknown requests to your specified server. For example:

```js
module.exports = {
  proxy: {
    prefix: '/api',
    url: 'http://examplesite.com/api/',
  },
};
```
