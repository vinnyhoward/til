# pathPrefix

It’s common for sites to be hosted somewhere other than the root of their domain. Say you have a Gatsby site at `example.com/blog/`. In this case, you would need a prefix `(/blog)` added to all paths on the site.

```js
module.exports = {
  pathPrefix: `/blog`,
};
```
