This App is crafted with NestJS, Prisma, Mongodb, TypeScript, SwaggerUI
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Install Prisma

```bash
# install prisma locally
$ npm install prisma --save-dev

# generate schema ( Everytime when schema changes)
$ npx prisma generate

```

## Connect MongoDB

Go to MongoDB Atlas and create a new mongodb instance
Copy .env.example as .env
Paste mongodb url into .env file

> Try using mongodb Atlas, OR if you want to add mongodb local, create a replica set otherwise app would not work
## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## API DOCS (Swagger UI)

After running app in watch mode, Go to [localhost:3000/docs](localhost:3000/docs)

## Stay in touch

- Author - [Prince K](https://github.com/princephpdev)

## License

[MIT licensed](LICENSE).
