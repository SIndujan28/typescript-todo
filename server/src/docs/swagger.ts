// src/docs/swagger.ts
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Application } from 'express';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Todo API',
    version: '1.0.0',
    description: 'A simple API for managing todos',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Development server',
    },
  ],
  components: {
    schemas: {
      createTodoSchema: {
        type: 'object',
        properties: {
          title: { type: 'string' },
          completed: { type: 'boolean' },
        },
        required: ['title'],
      },
      updateTodoSchema: {
        type: 'object',
        properties: {
          title: { type: 'string' },
          completed: { type: 'boolean' },
        },
        required: ['title'],
      },
    },
  },
};

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.ts'], // Path to the API docs
};

const swaggerSpec = swaggerJsDoc(options);

export const setupSwagger = (app: Application) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
