import { Router } from 'express';
import { getTodos, addTodo, updateTodo, deleteTodo } from '../controllers/todosController';
import { validate } from '../middleware/validate';
import { paginationMiddleware } from '../middleware/pagination';
import { createTodoSchema, updateTodoSchema } from '../models/todoSchema';

const router = Router();

/**
 * @swagger
 * /api/todos:
 *   get:
 *     summary: Get all todos with pagination
 *     parameters:
 *       - name: page
 *         in: query
 *         description: Page number for pagination
 *         required: false
 *         schema:
 *           type: integer
 *           default: 1
 *       - name: limit
 *         in: query
 *         description: Number of items per page
 *         required: false
 *         schema:
 *           type: integer
 *           default: 10
 *     responses:
 *       200:
 *         description: Returns a paginated list of todos
 */
router.get('/', paginationMiddleware, getTodos);

/**
 * @swagger
 * /api/todos:
 *   post:
 *     summary: Create a new todo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createTodoSchema'
 *     responses:
 *       201:
 *         description: Todo created
 */
router.post('/', validate({ body: createTodoSchema }), addTodo);

/**
 * @swagger
 * /api/todos/{id}:
 *   put:
 *     summary: Update a todo
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the todo to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/updateTodoSchema'
 *     responses:
 *       200:
 *         description: Todo updated
 *       404:
 *         description: Todo not found
 */
router.put('/:id', validate({ body: updateTodoSchema }), updateTodo);

/**
 * @swagger
 * /api/todos/{id}:
 *   delete:
 *     summary: Delete a todo
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the todo to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Todo deleted
 *       404:
 *         description: Todo not found
 */
router.delete('/:id', deleteTodo);

export default router;