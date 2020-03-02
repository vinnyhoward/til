# GraphQL API

A great advantage of Gatsby is a built-in data layer that combines all data sources you configure. Data is collected at build time and automatically assembled into a schema that defines how data can be queried throughout your site.

## Sourcing data

Data needs to be sourced — or added to the GraphQL schema — to be queried and pulled into pages using GraphQL. Gatsby uses source plugins to pull in data.

To source data with an existing plugin you have to install all needed packages. Furthermore you have to add the plugin to the plugins array in the `gatsby-config` with any optional configurations. If you want to source data from the filesystem for use with GraphQL, such as Markdown files, images, and more, refer to the filesystem data sourcing docs and recipes.

For instructions on installing plugins from npm, take a look at the instructions in the docs on using a plugin.

You can also create custom plugins to fit your own use cases and pull in data however you want.

## Query components and hooks

Data can be queried inside pages, components, or the `gatsby-node.js` file, using one of these options:

- The `pageQuery` component

- The `StaticQuery` component

- The `useStaticQuery` hook

Because of how Gatsby processes GraphQL queries, you can’t mix page queries and static queries in the same file. You also can’t have multiple page queries or static queries in one file.
