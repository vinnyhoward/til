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