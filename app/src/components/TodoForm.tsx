// src/components/TodoForm.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todosSlice';
import { TextField, Button, Box } from '@mui/material';
import { useAppDispatch } from '../redux/store'


 export const TodoForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch<useAppDispatch>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addTodo({
      title,
      completed: false
    }));
    setTitle('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2, mb: 3 }}>
      <TextField
        label="Todo"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Add Todo
      </Button>
    </Box>
  );
};

export default TodoForm;
