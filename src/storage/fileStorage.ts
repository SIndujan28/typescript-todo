import { Todo } from '../models/todo';
import fs from 'fs';
import path from 'path';

const filePath = path.join(__dirname, '../../todos.json');

export const readTodosFromFile = (): Todo[] => {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]));
  }
  const fileContent = fs.readFileSync(filePath);
  return JSON.parse(fileContent.toString());
};

export const writeTodosToFile = (todos: Todo[]) => {
  fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));
};
