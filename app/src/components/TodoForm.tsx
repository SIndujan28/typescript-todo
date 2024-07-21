import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

interface TodoFormProps {
  onAddTodo: (title: string) => void;
}

export const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (title.trim()) {
      onAddTodo(title.trim());
      setTitle('');
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', width: '100%', marginTop: 2 }}
    >
      <TextField
        variant="outlined"
        label="New Todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        required
        sx={{ marginBottom: 2 }}
      />
      <Button type="submit" variant="contained" color="primary">
        Add Todo
      </Button>
    </Box>
  );
};
