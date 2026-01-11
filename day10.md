

THEORETICAL QUESTIONS

1. What is MongoDB? What makes it different from relational databases?

MongoDB is a NoSQL, document-based database. It stores data in JSON-like documents instead of rows and tables. Unlike relational databases, MongoDB does not require a fixed schema, supports horizontal scaling, and avoids complex joins. It is designed for flexibility, scalability, and fast performance.

2. What are collections and documents in MongoDB?

A document is a single record stored in MongoDB, similar to a row in a relational database. A collection is a group of related documents, similar to a table. Documents inside a collection can have different structures.

3. What is BSON? How does it differ from JSON?

BSON stands for Binary JSON. MongoDB stores data internally in BSON format. BSON supports more data types than JSON, such as Date and ObjectId, and is faster to parse because it is binary rather than text-based.

4. Explain the structure of a MongoDB document. What is _id?

A MongoDB document is a set of key-value pairs stored in BSON format. Every document contains an _id field, which is unique and acts as the primary key. If not provided, MongoDB automatically generates it.

5. What are the data types supported in MongoDB?

MongoDB supports data types such as String, Number, Boolean, Array, Object (embedded document), Date, ObjectId, and Null.

6. What are embedded documents vs references in MongoDB?

Embedded documents store related data inside the same document. References store related data in separate documents and link them using an ID.

7. When should you embed vs reference data?

Embedding is preferred when data is accessed together, has a one-to-few relationship, and is read-heavy. Referencing is preferred when data is reused, has a one-to-many relationship, or changes frequently.

8. What are the advantages and disadvantages of MongoDB?

Advantages include flexible schema, high scalability, fast read and write operations, and easy horizontal scaling. Disadvantages include limited support for complex joins, possible data duplication, and weaker support for complex transactions compared to relational databases.

9. Explain schema design in MongoDB. Is MongoDB schema-less?

MongoDB is schema-flexible, not completely schema-less. While it does not enforce a schema by default, developers can define schemas using application-level tools like Mongoose or database validation rules. Schema design in MongoDB is based on application query patterns.

10. What is the aggregation pipeline in MongoDB?

The aggregation pipeline is a framework that processes data in multiple stages. Each stage performs an operation such as filtering, grouping, sorting, or transforming data. It is used for complex data analysis and reporting.

---

MACHINE CODING QUESTION

MongoDB CRUD Operations – Product Catalog API

The task is to build a simple API that supports creating, reading, updating, and deleting products.

Create operation allows adding a new product with fields like name, price, category, description, and creation date.

Read operation supports filtering products by category, searching products by name, sorting results by fields like price, and pagination using page and limit parameters.

Update operation allows modifying existing product details using a product ID.

Delete operation removes a product using its ID.

The API should return structured responses and handle basic validation.
