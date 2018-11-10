# What is Prisma?

Prisma is a data layer that replaces traditional ORMs in your application architecture.

The data layer consists of several components:

- A Prisma server acting as a proxy for your database
- A high-performance query engine that runs on the Prisma server and generates actual database queries
- A Prisma client that connects to the Prisma server
- A real time event system that lets you subscribe to database events

## Use

Prisma is useful in any context where you're working with databases.

### Building GraphQL servers

Prisma is the perfect tool for building ```GraphQL``` servers. The Prisma client is compatible with the Apollo ecosystem, has default support for GraphQL subscriptions and Relay-style pagination, provides end-to-end type safety and comes with a built-in dataloader to solve the N+1 problem.

### Building REST APIs

Prisma is a great fit for building ```REST APIs``` where it can be used in place of traditional ORMs. It provides many benefits such as type-safety, a modern API and flexible ways for reading and writing relational data.

### CLIs, Scripts, Serverless Functions & a lot more

Prisma has an extremely flexible API which makes it a great fit for a variety of use cases. Whenever you need to talk to one or more databases, Prisma will be of great help by simplifying database workflows.