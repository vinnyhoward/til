# Gatsby Themes

Gatsby themes are plugins that include a gatsby-config.js file and add pre-configured functionality, data sourcing, and/or UI code to Gatsby sites. You can think of Gatsby themes as separate Gatsby sites that can be put together and allow you to split up a larger Gatsby project

## Themes vs Starters

Traditional starters help you take the first step towards reducing the level of effort involved in creating a new Gatsby site. However, there are two main problems with traditional starters:

- Sites created from a traditional starter have basically been “ejected” from the starter — They maintain no connection to the starter, and begin to diverge immediately. If the starter is updated later, there’s no easy way to pull upstream changes into an existing project.

- If you created multiple sites using the same starter, and later wanted to make the same update to all of those sites, you’d have to do them individually, site-by-site.

Gatsby themes allow Gatsby site functionality to be packaged as a standalone product for others and yourself to easily reuse. Using a traditional starter, all of your default configuration lives directly in your site. Using a theme, all of your default configuration lives in an npm package.

Themes solve the problems that traditional starters experience:

- Sites created using a Gatsby theme can adopt upstream changes to the theme — themes are versioned packages that can be updated like any other package.

- You can create multiple sites that consume the same theme. To make updates across those sites, you can update the central theme and bump the version in the sites through package.json files (rather than spending the time to tediously update the functionality of each individual site).

- Themes are composable. You could install a blog theme alongside a notes theme, alongside an e-commerce theme (and so forth)

- A Gatsby theme is effectively a composable Gatsby config. They provide a higher-level approach to working with Gatsby that abstracts away the complex or repetitive parts into a reusable package.
