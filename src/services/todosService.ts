import { Todo } from '../models/todo';
import { readTodosFromFile, writeTodosToFile } from '../storage/fileStorage';
import { createTodoSchema, updateTodoSchema } from '../models/todoSchema';
import { v4 as uuidv4 } from 'uuid';

export const addTodoToService = (newTodo: Partial<Todo>): Todo => {
  const validatedTodo = createTodoSchema.parse(newTodo);
  const todos = readTodosFromFile();
  const todoWithId = { ...validatedTodo, id: uuidv4() };
  todos.push(todoWithId);
  writeTodosToFile(todos);
  return todoWithId;
};

export const updateTodoInService = (id: string, updatedTodo: Partial<Todo>): Todo | null => {
  const validatedTodo = updateTodoSchema.parse(updatedTodo);
  const todos = readTodosFromFile();
  const todoIndex = todos.findIndex(todo => todo.id === id);
  if (todoIndex >= 0) {
    const updated = { ...todos[todoIndex], ...validatedTodo };
    todos[todoIndex] = updated;
    writeTodosToFile(todos);
    return updated;
  }
  return null;
};

export const deleteTodoFromService = (id: string): boolean => {
  const todos = readTodosFromFile();
  const newTodos = todos.filter(todo => todo.id !== id);
  if (todos.length !== newTodos.length) {
    writeTodosToFile(newTodos);
    return true;
  }
  return false;
};
