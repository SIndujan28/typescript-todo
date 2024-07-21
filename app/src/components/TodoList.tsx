import React from 'react';
import { List, Box } from '@mui/material';
import { Todo } from '../types/todo';
import { TodoItem } from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  onUpdateTodo: (id: string, updatedTitle: string) => void;
  onDeleteTodo: (id: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onUpdateTodo, onDeleteTodo }) => {
  return (
    <Box sx={{ marginTop: 2, width: '100%' }}>
      <List>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onUpdateTodo={onUpdateTodo}
            onDeleteTodo={onDeleteTodo}
          />
        ))}
      </List>
    </Box>
  );
};
