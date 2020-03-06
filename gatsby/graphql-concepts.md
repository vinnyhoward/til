# GraphQL Concepts with Gatsby

There are many options for loading data for React components. One of the most popular and powerful of thse is a technology called `GraphGl`.

GraphQL was invented at Facebook to help product engineers pull needed data into React components.

GraphQL is a query language (the QL part of its name). If you’re familiar with SQL, it works in a very similar way. Using a special syntax, you describe the data you want in your component and then that data is given to you.

Gatsby uses GraphQL to enable `page and StaticQuery components` to declare what data they and their sub-components need. Then, Gatsby makes that data available in the browser when needed by your components.

Data from any number of sources is made queryable in one unified layer, a key part of the Gatsby building process:

### Content

`Content` is often organized in systems like databases, content management systems, files, or external APIs.

Any source of data can be connected to Gatsby through plugins or using Gatsby's APIs.

site-data.yaml

```yaml
site:
  title: Home
  description: Gatsby tips
```

### Build

`Building` compiles your application with modern features like server-side rendering, route based code splitting (and more!) for great performance out of the box.

During the build (when you run `gatsby build` or `gatsby develop`), data is fetched and combined into a GraphQL schema with a static snapshot of all data your site needs.

```js
const query = graphql`
  query HomePageQuery {
    site {
      title
      description
    }
  }
`;
```

### Data

`Data` returned by GraphQL comes back in the exact same shape that you asked for it, without having to travel across the network because it was already gathered at `build time`.

Since all data is combined in the data layer, it's even possible to query multiple sources at the same time.

```json
data: {
  site: {
    title: "Home"
    description: "Gatsby tips"
  }
}
```

### View

React powers components in Gatsby sites that are rehydrated, whatever you can do in React you can do with Gatsby.

Your components can pull in whatever data they need from any source in the data layer.

```jsx
export ({ data }) => (
  <div>
    <h1>{data.site.title}</h1>
    {data.site.description}
  </div>
)
```

### App

The optimized app runs in the browser with all the speed of Gatsby as well as the convenience and great developer experience of working with tools like React and GraphQL.

## Why is GraphQL so cool

- Eliminate frontend data boilerplate — no need to worry about requesting & waiting for data. Just ask for the data you need with a GraphQL query and it’ll show up when you need it

- Push frontend complexity into queries — many data transformations can be done at build-time within your GraphQL queries

- It’s the perfect data querying language for the often complex/nested data dependencies of modern applications
  Improve performance by removing data bloat — GraphQL enables you to select only the data you need, not whatever an API returns
