# Main Concepts

When working with Prisma, you're mainly dealing with three concepts:

- Datamodel: Defines the models of your application and is foundation for the Prisma client API. (Optional: Can be used to perform migrations against your database.)

- Prisma server: A standalone infrastructure component sitting on top of your database.

- Prisma client: An auto-generated library that connects to the Prisma server and lets you read, write and stream data in your database. It is used for data access in your applications.