# MongoDB

```MongoDB``` is an open-source document database that provides high performance, high availability, and automatic scaling. A record in MongoDB is a document, which is a data structure composed of field and value pairs. ```MongoDB documents``` are similar to ```JSON objects````. The values of fields may include other documents,arrays, and arrays of documents.

An example of a ```Mongo Document```:

```
{
  name: "Sue",
  age: 26,
  state: "A",
  groups: [ "news, "sports" ]
}
```

The advantages of using documents are:

- Documents (i.e. objects) corresponds to native data types in many programming languages
- Embedded documents and arrays reduce need for expensive joins
- Dynamic schema support fluent polymorphism

# Key Features
## Preformant 

MongoDB provides high performance data persistance.

- Support for embedded data models reduces I/O activity on database system.
- Indexes support faster queries and can include keys from embedded documents and arrays.