import { Request, Response } from 'express';
import { getTodosFromService, addTodoToService, updateTodoInService, deleteTodoFromService } from '../services/todosService';
import { PaginatedRequest } from '../types/paginatedRequest'
export const getTodos = (req: PaginatedRequest, res: Response) => {
  const pagination = req.pagination || { page: 1, limit: 10 };

  const page = Number(pagination.page);
  const limit = Number(pagination.limit);
  const todos = getTodosFromService(page, limit);
  res.json(todos);
};

export const addTodo = (req: Request, res: Response) => {
  const todo = req.body;
  const newTodo = addTodoToService(todo);
  res.status(201).json(newTodo);
};

export const updateTodo = (req: Request, res: Response) => {
  const { id } = req.params;
  const todo = req.body;
  const updatedTodo = updateTodoInService(id, todo);
  if (!updatedTodo) {
    res.status(404).send('Todo not found');
    return;
  }
  res.json(updatedTodo);
};

export const deleteTodo = (req: Request, res: Response) => {
  const { id } = req.params;
  const success = deleteTodoFromService(id);
  if (!success) {
    res.status(404).send('Todo not found');
    return;
  }
  res.sendStatus(200);
};
