## Todo App

This project contains a Todo application with a frontend built using React, Redux Toolkit, and Material UI, and a backend built using Express.js.


## Project Structure

```
├── app
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── redux
│   │   ├── types
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── ...
│   ├── package.json
│   ├── tsconfig.json
│   └── ...
└── server
    ├── controllers
    ├── middleware
    ├── models
    ├── routes
    ├── app.ts
    ├── server.ts
    ├── package.json
    └── ...
```

## Prerequisites

Node.js (>= 20.x)
npm

## Setup

### Backend (server)

Navigate to the server directory:

```bash
cd server
```
### Install the dependencies:

```bash
npm install
```


### Start the backend server:

```bash
npm run dev
```


The backend server should now be running on http://localhost:3000.



## Frontend (app)

### Navigate to the app directory:

```bash 
cd app
```

### Install the dependencies:

```bash
npm install
```

### Start the frontend development server:

```bash
npm start
```

The frontend application should now be running on http://localhost:3000.


## Additional Scripts
### Backend

    npm run build or yarn build: Build the backend for production.
    npm run start or yarn start: Start the backend in production mode.

### Frontend

    npm run build or yarn build: Build the frontend for production.
    npm run test or yarn test: Run frontend tests.

## API Documentation

API documentation is available using Swagger. Once the backend server is running, you can access the Swagger documentation at:

http://localhost:3000/api-docs


## License
This project is licensed under the MIT License.