import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { fetchTodos, addTodo, selectTodos, updateTodo, deleteTodo } from '../redux/todosSlice';
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { Box, Typography } from '@mui/material';

export const TodoPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector(selectTodos);

  const handleAddTodo = (title: string) => {
    dispatch(addTodo({ title, completed: false }));
  };

  const handleUpdateTodo = (id: string, updatedTitle: string) => {
    dispatch(updateTodo({ id, updatedTodo: { title: updatedTitle } }));
  };

  const handleDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <Box sx={{ marginTop: 8, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '40vw' }}>
      <Typography variant="h4" gutterBottom>
        Todo App
      </Typography>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onUpdateTodo={handleUpdateTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </Box>
  );
};
