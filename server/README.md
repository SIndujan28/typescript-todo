# Todo API

A simple Todo API built with TypeScript, Express, and Zod for validation. This API includes basic CRUD operations with support for pagination.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete Todos.
- **Pagination**: Support for paginated results.
- **Validation**: Input validation using Zod.
- **Testing**: Unit tests using Jest.
- **Linting**: Code quality checks with ESLint and Husky.

## Installation

1. **Clone the repository:**

```bash
git clone https://github.com/SIndujan28/Typescript-todo.git
cd Typescript-todo
```


2. **Install dependencies:**

```bash
npm install
```

## Configuration
### Environment Variables

Set up environment variables in a .env file if needed. For this basic app, no environment variables are required.


## Running the Application

### Start the server:

``` bash
npm start
```

### The server will start on http://localhost:3000.

## Run the development server with auto-reloading:

``` bash
npm run dev
```

## API Endpoints
### Get All Todos

    Endpoint: GET /todos
    Query Parameters:
        page (optional): Page number for pagination.
        limit (optional): Number of items per page.

### Create a Todo

    Endpoint: POST /todos
    Request Body:
        title (string): The title of the todo.
        completed (boolean): Whether the todo is completed.

### Update a Todo

    Endpoint: PUT /todos/:id
    Path Parameters:
        id (string): The ID of the todo to update.
    Request Body:
        title (optional, string): The new title of the todo.
        completed (optional, boolean): The new completion status.

### Delete a Todo

    Endpoint: DELETE /todos/:id
    Path Parameters:
        id (string): The ID of the todo to delete.

## Testing

Run tests using Jest:

```bash
npm test
```

## Linting

Lint your code using ESLint:

```bash
npm run lint
```

## Pre-commit Hooks

Husky is configured to run linting and tests before commits. Ensure you have Husky installed and configured:

```bash
npm install husky --save-dev
npx husky install
```

## Directory Structure

    src/: Source code
        controllers/: Request handlers
        models/: Zod schemas and TypeScript models
        routes/: API routes
        services/: Business logic
        middleware/: Custom middleware
        storage/: File storage handlers
        types/: Typescript types
    package.json: Project metadata and scripts

## Contributing

Feel free to open issues or submit pull requests. Please follow the code style and write tests for new features.


## License

This project is licensed under the MIT License - see the LICENSE file for details.
