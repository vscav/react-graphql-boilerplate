# graphql-react-boilerplate server

## Quick start

`yarn` will install all necessary Node dependencies.

## Database setup

You will need Docker in order to install a containerised MySQL dev environment. Once Docker is installed, you can run:

```sh
docker run \
  -p 0.0.0.0:7999:3306 \
  --name graphql-react-boilerplate-db \
  -e MYSQL_ROOT_PASSWORD=password \
  -e MYSQL_USER=graphql-react-boilerplate-dev \
  -e MYSQL_PASSWORD=password \
  -e MYSQL_DATABASE=graphql-react-boilerplate \
  -d mysql:5.7.20
```

This will create a Docker instance called `graphql-react-boilerplate-db`, running MySQL, with the root password being `password`. It also creates a database called `graphql-react-boilerplate`, creates a user called `graphql-react-boilerplate-dev` (with password `password`), and assigns that user full permissions onto the `graphql-react-boilerplate` database.

## Migrations

Now, you actually want to create tables in database. The two following commands are based on the models and migrations files of our different tables.

```sh
db:migrate
```

This first command will will execute these steps :
- Ensure a table called SequelizeMeta in database. This table is used to record which migrations have run on the current database.
- Start looking for any migration files which haven't run yet. This is possible by checking SequelizeMeta table. In this case it will run migration files.
- Creates tables with all columns as specified in their migration files.

```sh
db:migrate:undo
```

This second command will allow you to revert to old state (this command will revert most recent migrations).

## Usage

Launch the Express server by typing the following command :

```sh
watch
```

You can then navigate to ```localhost:7000/graphql``` in order to access the GraphQL playground.

