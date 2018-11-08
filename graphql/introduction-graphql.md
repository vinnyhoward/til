# Introduction to GraphQL

GraphQL is a query language for your API and a rune for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, it gives clients the power to ask for exactly what they need and nothing more.

## Ask for what you need, get only that

Sending a GraphQL query to your API will always yield predictable and desirable results, and will return only what you specify. Apps that use GrapQL are fast and stable becuase they control the data it receives, and not the server.

Example Query:
```
{
  hero {
    name
  }
}
```

Example Output:
```
{
  "hero" {
    "name": "Darth Vader"
  }
}
```

## One request, Many resources

GraphQL queries can not only access the properties of one resource, but aslo smoothly follow references between them. While REST API;s require loading from multiple URLs, GraphQL allows you to get all the data your app needs in one single request. 

## Typed System

GraphQL APIs are organized in terms of types and not fields nor endpoints. Access the full capabilities of your data from one single request and one single endpoint. GraphQL ensures types to provide clear and helpful errors.

## Powerful Tools

Know exactly what data you can request from your API without leaving your editor, highlight potential issues before sending a query, and take advantage of improved code intelligence. GraphQL makes it easy to build powerful tools like GraphiQL by leveraging your API’s type system.

## Evolve API without versions

Add new fields and types to your GraphQL API without impacting existing queries. Aging fields can be deprecated and hidden from tools. By using a single evolving version, GraphQL APIs give apps continuous access to new features and encourage cleaner, more maintainable server code.

## Bring your own data and code

GraphQL creates a uniform API across your entire application without being limited by a specific storage engine. Write GraphQL APIs that leverage your existing data and code with GraphQL engines available in many languages.