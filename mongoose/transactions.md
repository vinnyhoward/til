# Transactions

Transactions are new in MongoDB 4.0 and Mongoose 5.2.0. Transactions let you execute multiple operations in isolation and potentially undo all the operations if one of them fails.

## Using Transactions

To use transactions with Mongoose, you should use `Mongoose >= 5.2.0`. To check your current version of Mongoose, `run npm list | grep "mongoose"` or check the `mongoose.version` property.

Transactions are built on `MongoDB sessions`. To start a transaction, you first need to call `startSession()` and then call the session's `startTransaction()` function. To execute an operation in a transaction, you need to pass the session as an option.

```js
const Customer = db.model('Customer', new Schema({ name: String }));

const session = await db.startSession();
session.startTransaction();

// This `create()` is part of the transaction because of the `session`
// option.
await Customer.create([{ name: 'Test' }], { session: session });

// Transactions execute in isolation, so unless you pass a `session`
// to `findOne()` you won't see the document until the transaction
// is committed.
let doc = await Customer.findOne({ name: 'Test' });
assert.ok(!doc);

// This `findOne()` will return the doc, because passing the `session`
// means this `findOne()` will run as part of the transaction.
doc = await Customer.findOne({ name: 'Test' }).session(session);
assert.ok(doc);

// Once the transaction is committed, the write operation becomes
// visible outside of the transaction.
await session.commitTransaction();
doc = await Customer.findOne({ name: 'Test' });
assert.ok(doc);

session.endSession();
```

In the above example, `session` is an instance of the MongoDB Node.js driver's `ClientSession` class. Please refer to the MongoDB driver docs for more information on what methods session has.