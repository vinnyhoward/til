# How migrations work

Once you get into production you'll need to synchronize model changes into the database. Typically it is unsafe to use `synchronize: true` for schema synchronization on production once you get data in your database. Here is where migrations come to help.

A migration is just a single file with sql queries to update a database schema and apply new changes to an existing database.

Let's say you already have a database and a post entity:

```
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';
import WineFuture from './WineFuture';

@Entity()
export default class CouponCode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 40})
  userId: string;

  @Column('text')
  couponCode: string;

  @Column()
  redeemed: boolean;

  @Column('text')
  transactionType: string;

  @Column('text')
  transactionId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
```

And your entity worked in production for months without any changes. You have thousands of entries in your database.
Now you need to make a new release and rename `transactionType` to `transaction`. What would you do?

You need to create a new migration with the following sql query (postgres dialect):

```
ALTER TABLE "coupon_code" ALTER COLUMN "transaction_type" RENAME TO "transaction";
```

Once you run this sql query your database schema is ready to work with your new codebase. TypeORM provides a place where you can write such sql queries and run them when needed. This place is called "migrations".

## Creating a new migration

Before creating a new migration you need to setup your connection options properly:

```
{
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "test",
    "password": "test",
    "database": "test",
    "entities": ["entity/*.js"],
    "migrationsTableName": "custom_migration_table",
    "migrations": ["migration/*.js"],
    "cli": {
        "migrationsDir": "migration"
    }
}
```