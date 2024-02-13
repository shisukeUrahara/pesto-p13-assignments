# Enhanced Database Concepts and Normalization

## Question 1: Normalization of the Bookstore Database

### First Normal Form (1NF)

1NF ensures that each column contains atomic values, and there are no repeating groups. The given table is already in 1NF, as it meets these criteria.

| Book ID | Title                 | Author              | Genre   | Publisher     | ISBN           | Price |
| ------- | --------------------- | ------------------- | ------- | ------------- | -------------- | ----- |
| 101     | To Kill a Mockingbird | Harper Lee          | Fiction | HarperCollins | 978-0061120084 | 10.99 |
| 102     | The Great Gatsby      | F. Scott Fitzgerald | Fiction | Scribner      | 978-0743273565 | 12.50 |
| 103     | Principles of Physics | Jearl Walker        | Science | Wiley         | 978-0321976444 | 50.00 |

### Second Normal Form (2NF)

The table is already in 2NF, as all non-key attributes are fully functionally dependent on the primary key (`Book ID`), and there are no composite keys to consider partial dependencies against.

### Third Normal Form (3NF)

To achieve 3NF, we must ensure no transitive dependencies exist. However, in the provided example, the step suggested in the initial answer incorrectly assumes a dependency between `Author` and `Publisher`. Instead, we should ensure that all attributes depend directly on the primary key. Given the provided information, the table appears already in 3NF because there are no transitive dependencies between non-key attributes and the primary key.

## [Bonus] Question 2: Database Normalization Practice

### Step 1: First Normal Form (1NF)

The Employee Information table is in 1NF, as it contains atomic values without any repeating groups.

### Step 2: Second Normal Form (2NF)

For 2NF, we create separate tables for `Employee`, `Project`, and an associative table for `Employee-Project Assignments` to eliminate partial dependencies.

1. **Employee Table**:

| Employee ID | Employee Name | Department |
| ----------- | ------------- | ---------- |
| 101         | John Doe      | HR         |
| ...         | ...           | ...        |

2. **Project Table**:

| Project ID | Project Name | Start Date | End Date   |
| ---------- | ------------ | ---------- | ---------- |
| 001        | Project A    | 2023-01-15 | 2023-06-30 |
| ...        | ...          | ...        | ...        |

3. **Employee-Project Assignment Table**:

| Employee ID | Project ID | Salary |
| ----------- | ---------- | ------ |
| 101         | 001        | 5000   |
| ...         | ...        | ...    |

### Step 3: Third Normal Form (3NF)

To move to 3NF, we ensure no transitive dependencies exist. We might consider revising the department to employee relationship and ensure salary is correctly modeled since it can vary by project, not by department alone.

1. **Department Table**:

| Department ID | Department Name |
| ------------- | --------------- |
| 1             | HR              |
| ...           | ...             |

2. **Employee Table** (revised):

| Employee ID | Employee Name | Department ID |
| ----------- | ------------- | ------------- |
| 101         | John Doe      | 1             |
| ...         | ...           | ...           |

Note: Salary has been moved to the `Employee-Project Assignment Table` to more accurately reflect its variability.

### Step 4: Fourth Normal Form (4NF)

The tables are in 4NF as we have already removed multi-valued dependencies through our normalization process.

### Step 5: Fifth Normal Form (5NF)

The tables are considered to be in 5NF if no further normalization based on join dependencies can be done. Given the simplified structure and lack of more complex relationships, our schema is effectively in 5NF.

## Question 3: Primary keys and foreign keys in a relational database

Primary Key: Uniquely identifies each record in a table.
Foreign Key: A key from another table used to refer to a specific key, usually a primary key, in another table, creating a link between the two.

## Question 4: ACID properties

- **Atomicity**: Guarantees that each transaction is treated as a single unit, which either succeeds completely or fails completely.
- **Consistency**: Ensures that a transaction can only bring the database from one valid state to another, maintaining database integrity.
- **Isolation**: Ensures that the concurrent execution of transactions results in a system state that would be obtained if transactions were executed serially.
- **Durability**: Ensures that once a transaction has been committed, it will remain so, even in the event of a crash, power loss, or other system failures.

## Question 5: Indexing in a database

Indexing is a data structure technique to efficiently retrieve records from a database. Indexes are used to quickly locate data without having to search every row in a database table every time a database table is accessed.

## Question 6: Concurrency control and deadlocks

Concurrency control is the process of managing simultaneous operations on a database without having them interfere with each other. Deadlocks occur when two or more operations are waiting indefinitely for each other to release resources.

## Question 7: Database sharding

Database sharding is a method of distributing data across multiple servers or databases to improve performance and scalability.

**Real-time examples**:

1. **E-commerce platforms** use sharding to distribute user and order data across multiple databases to manage load and improve query performance.
2. **Social media platforms** use sharding to distribute posts, user data, and media across different databases based on geographic location or user ID to enhance performance and scalability.
