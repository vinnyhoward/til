# Queries 

At its simplest, GraphQL is about asking for specific fields on objects.

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
  "data": {
    "hero": {
      "name": "R2-D2"
    }
  }
}
```

You can see immediately that the query has exactly the same shape as the result. This is essential to GraphQL, because you always get back what you expect, and the server knows exactly what fields the client is asking for.

GraphQL can also refer to ```Objects```, and you can make a ```sub-selection``` of fields for that ```Object```.
GraphQL can traverse realted objects and their fields, letting clients fetch lots of related data in one request, instead of making several requests like the classic REST architecture.

Example Query:
```
{
  hero {
    name
    # Queries can have comments!
    friends {
      name
      id
      appearsIn
    }
  }
}
```

Example Output:
```
{
  "data": {
    "hero": {
      "name": "R2-D2",
      "friends": [
        {
          "name": "Luke Skywalker",
          "id": "1000",
          "appearsIn": [
            "NEWHOPE",
            "EMPIRE",
            "JEDI"
          ]
        },
        {
          "name": "Han Solo",
          "id": "1002",
          "appearsIn": [
            "NEWHOPE",
            "EMPIRE",
            "JEDI"
          ]
        },
        {
          "name": "Leia Organa",
          "id": "1003",
          "appearsIn": [
            "NEWHOPE",
            "EMPIRE",
            "JEDI"
          ]
        }
      ]
    }
  }
}
```

GraphQL queries look the same for both single items or lists of items, however we know which one to expect based on what is indicated in the schema.