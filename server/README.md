# graphql-react-boilerplate server

## Database setup

`yarn` will install all necessary Node dependencies.

You will need Docker is needed in order to install a containerised MySQL dev environment. Once Docker is installed, we run:

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