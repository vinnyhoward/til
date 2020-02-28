# siteMetaData

siteMetadata
When you want to reuse common pieces of data across the site (for example, your site title), you can store that data in siteMetadata:

```js
// gatsby-config.js

module.exports = {
  siteMetadata: {
    title: `Gatsby`,
    siteUrl: `https://www.gatsbyjs.org`,
    description: `Blazing fast modern site generator for React`,
  },
};
```

This way you can store it in one place, and pull it whenever you need it. If you ever need to update the info, you only have to change it here.
