import { addTodoToService, getTodosFromService, updateTodoInService, deleteTodoFromService } from './todosService';
import { readTodosFromFile, writeTodosToFile } from '../storage/fileStorage';
import { Todo } from '../models/todo';
import { v4 as uuidv4 } from 'uuid';

// Mock the file storage functions
jest.mock('../storage/fileStorage', () => ({
  readTodosFromFile: jest.fn(),
  writeTodosToFile: jest.fn(),
}));

jest.mock('uuid', () => ({
  v4: jest.fn(),
}));

describe('Todos Service', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  const mockTodos: Todo[] = [
    { id: '1', title: 'Todo 1', completed: false },
    { id: '2', title: 'Todo 2', completed: true },
  ];

  it('should get all todos', () => {
    (readTodosFromFile as jest.Mock).mockReturnValue(mockTodos);

    const result = getTodosFromService(1, 10);

    expect(result).toEqual(mockTodos);
  });

  it('should add a new todo', () => {
    const newTodo: Partial<Todo> = { title: 'New Todo', completed: false };
    const newId = '3';
    const addedTodo = { ...newTodo, id: newId };

    (uuidv4 as jest.Mock).mockReturnValue(newId);
    (readTodosFromFile as jest.Mock).mockReturnValue(mockTodos);
    (writeTodosToFile as jest.Mock).mockImplementation(() => {});

    const result = addTodoToService(newTodo);

    expect(result).toEqual(addedTodo);
    expect(writeTodosToFile).toHaveBeenCalledWith([...mockTodos]);
  });

  it('should update an existing todo', () => {
    const id = '2';
    const updatedData: Partial<Todo> = { title: 'Updated Todo 2', completed: true };
    const updatedTodo = { ...mockTodos[1], ...updatedData };

    (readTodosFromFile as jest.Mock).mockReturnValue(mockTodos);
    (writeTodosToFile as jest.Mock).mockImplementation(() => {});

    const result = updateTodoInService(id, updatedData);

    expect(result).toEqual(updatedTodo);
  });

  it('should delete an existing todo', () => {
    const id = '1';
    (readTodosFromFile as jest.Mock).mockReturnValue(mockTodos);
    (writeTodosToFile as jest.Mock).mockImplementation(() => {});

    const result = deleteTodoFromService(id);
    expect(result).toBe(true);
  });
});
