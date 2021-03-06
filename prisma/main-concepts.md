# Main Concepts

When working with Prisma, you're mainly dealing with three concepts:

- Datamodel: Defines the models of your application and is foundation for the Prisma client API. (Optional: Can be used to perform migrations against your database.)

- Prisma server: A standalone infrastructure component sitting on top of your database.

- Prisma client: An auto-generated library that connects to the Prisma server and lets you read, write and stream data in your database. It is used for data access in your applications.

### Datamodel

The ```datamodel``` primarily serves as foundation for the API operations of your Prisma client.

Prisma client operations are derived from ```datamodel```
For each model defined in your datamodel, there are the following Prisma client operations automatically generated for you:

- Read a single record of the model
- Read a list of records of the model (including filtering, sorting & pagination)
- Write a new record of the model
- Update an existing record of the model
- Delete an existing record of the model
- Check for the existence of a certain record of the model
- Receive realtime updates when there is a write operation on any record of the model
- You can find documentation and examples for all of these operations in the Prisma Client docs.

#### The Schema Definition Language (SDL)

The ```datamodel``` is written in .```prisma-files``` and uses ```GraphQL SDL syntax```. ```SDL``` is used because it is agnostic of programming languages, simple, expressive and intuitive to use.

There is no hard technical requirement for using ```SDL``` to define the datamodel and the API might be openened up to specify the datamodel in other ways in the future. Please create a feature request if you'd like to see a different way for specifying the datamodel.

Using the datamodel for database migrations (optional)
There are two cases how the datamodel can be created:

- Manually written: When the datamodel is written manually from scratch, the datamodel is also used to perform database migrations (this only applies for new databases without existing data). The model definitions of the datamodel not only determine the API operations of the Prisma client, but are also mapped to the database (meaning they're used to perform database migrations in a declarative way).

- Derived from an existing database schema (introspection): When you're starting to use Prisma with an existing database, the datamodel is derived from the existing database schema. In this case, Prisma is not used to perform database migrations (instead, you keep migrating the database manually as you used too).

While there currently is a clear rule for when you can use Prisma to perform database migrations and when not, it is planned to unify the two approaches. This means you'll always have the flexibility to perform migrations manually or using Prisma. Learn more.

Example
Here is what a simple datamodel with two models looks like:


```
type Post {
  id: ID! @unique
  createdAt: DateTime!
  published: Boolean! @default(value: "false")
  title: String!
  author: User!
}

type User {
  id: ID! @unique
  email: String @unique
  name: String!
  posts: [Post!]!
}

```
Here's a few things to note about the datamodel:

- The ```Post``` and ```User``` models are connected via a ```relation``` (defined by the author and posts fields).

- The ```!``` following a type means that the corresponding field of the model can never be ```null```.

- The ```@unique``` directive is used by Prisma to ensure there'll never be two records that have the same value for this field.

- The ```@default``` directive is used by Prisma to set default values when records of this model are being created.

- ```createdAt``` is not writeable and will be maintained by Prisma, it indicates the exact time when a record was created. There also is ```updatedAt``` which indicates the time when a record was last updated.

### Prisma client

 The Prisma client is an auto-generated library that replaces a traditional ORM in your API server. It connects to a Prisma server which sits on top your database:



#### Seamless relation API

The Prisma client is available in various programming languages and provides type safe database access. In contrast to traditional ORMs, it provides a seamless API to work with relational data, JOINs and transactions.

Here is an example that performs several write operations in a single transaction:

- Create a new User record

- Create two new Post records

- Connect the two newly created and one existing Post record to the new 

- User record via the posts relation

```
const newUserWithLinks = await prisma
  .createUser({
    name: "Alice",
    password: "IlikeTurtles",
    posts: {
      create: [{
        title: "Prisma is the data layer for modern applications",
      }, {
        title: "Check out How to GraphQL - The fullstack tutorial for GraphQL",
      }],
      connect: {
        id: "cjli6tknz005s0a23uf0lmlve"
      }
    }, 
  })
  ```
For traditional ```ORMs```, such a set of write operations requires you to manually control a database transaction. Prisma client handles the transaction for you.

### Type safe data access

The operations exposed by your Prisma client are strongly ```typed```. For any ```typed``` programming language, this means that you get compile-time safety for all database operations and you know exactly what shape of data is going to be returned.

It also makes for an amazing developer experience where you get auto-completion in your editor.

All the typings are auto-generated, so you don't need to deal with writing any boilerplate for that. After you changed your datamodel, you just regenerate your Prisma client and all typings will be updated.

### Realtime updates

Adding a realtime event system to your database is an extremely complicated task. Prisma client lets you ```subsribe``` to any database event without having to deal with the underlying infrastructure. You can do so via generated methods on the ```$subscribe``` property.

Here is an example that subscribes to events where new User records are created that have gmail in their email address:

```
prisma.$subsribe.user({
  mutation_in: ["CREATED"],
  email_contains: "gmail"
}).node()
```

### Native GraphQL

The Prisma client lets you run GraphQL queries and mutations against your database using the ```$graphql``` method.

Here is an example that shows how to create a new ```User``` record using the native GraphQL API:

```
const mutation = `=
  mutation ($name: String!){
    createUser(name: $name) {
      id
    }
  }
`

const variables = { name: 'Alice' }
const result = prisma.$graphql(mutation, variables)
```