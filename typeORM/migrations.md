# Quick Migrations Guide

First check your `ormconfig.json` to see if things are in order according to your project, or at the very least, see if you are in `development` mode and if you're hitting the right `database`.

First lets grab all of our executables from our bin folder in `node_modules`. Open up your terminal and type in `ls node_modules/.bin/typeorm` and press enter to make sure you're in the right directory and that `node_modules/.bin/typeorm` exists. Then type in `ls node_modules/.bin` to see all of your executables. After that, type in `./node_modules/.bin/typeorm` to view all of your `typeORM` commands that are available to you.

We are going ot focus on these commands:

```
  typeorm entity:create       Generates a new entity.
  typeorm subscriber:create   Generates a new subscriber.
  typeorm migration:create    Creates a new migration file.
  typeorm migration:generate  Generates a new migration file with sql needs to
                              be executed to update schema.
  typeorm migration:run       Runs all pending migrations.
  typeorm migration:revert 
```

# How Migrations Work

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
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar", {length: 255})
  userId: string;

  @Column("varchar", {length: 255})
  couponCode: string;

  @Column()
  redeemed: boolean;

  @Column("varchar", {length: 100})
  transactionType: string;

  @Column("varchar", {length: 255})
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

Here we setup three options:

- "migrationsTableName": "migrations" - Specify this option only if you need migration table name to be different from "migrations".
- "migrations": ["migration/*.js"] - indicates that typeorm must load migrations from the given "migration" directory.
- "cli": { "migrationsDir": "migration" } - indicates that the CLI must create new migrations in the "migration" directory.
- Once you setup connection options you can create a new migration using CLI:

```
typeorm migration:create -n PostRefactoring
```

Here, `PostRefactoring` is the name of the migration - you can specify any name you want. After you run the command you can see a new file generated in the "migration" directory named `{TIMESTAMP}-PostRefactoring.ts` where `{TIMESTAMP}` is the current timestamp when the migration was generated. Now you can open the file and add your migration sql queries there.

You should see the following content inside your migration:

```
import {MigrationInterface, QueryRunner} from "typeorm";

export class PostRefactoringTIMESTAMP implements MigrationInterface {
    
    async up(queryRunner: QueryRunner): Promise<any> {
        
    }

    async down(queryRunner: QueryRunner): Promise<any> { 
        
    }

    
}
```

There are two methods you must fill with your migration code: `up` and `down`. `up` has to contain the code you need to perform the migration. `down` has to revert whatever up changed.

Inside both `up` and `down` you have a `QueryRunner` object. All database operations are executed using this object.

Let's see what the migration looks like with our Post changes:

```
import {MigrationInterface, QueryRunner} from "typeorm";

export class PostRefactoringTIMESTAMP implements MigrationInterface {
    
    async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "title" RENAME TO "name"`);
    }

    async down(queryRunner: QueryRunner): Promise<any> { 
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "name" RENAME TO "title"`); // reverts things made in "up" method
    }

    
}
```