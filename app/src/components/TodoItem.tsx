import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Card, CardContent, IconButton, Typography, TextField, Grid } from '@mui/material';
import { AppDispatch } from '../redux/store';
import { updateTodo, deleteTodo } from '../redux/todosSlice';
import { Todo } from '../types/todo';

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const handleToggle = () => {
    dispatch(updateTodo({
      id: todo.id,
      updatedTodo: { completed: !todo.completed },
    }));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(updateTodo({
      id: todo.id,
      updatedTodo: { title: editedTitle },
    }));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedTitle(todo.title);
  };

  return (
    <Card 
      variant="outlined" 
      sx={{ 
        mb: 2, 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        width: '100%',
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: todo.completed ? '#f5f5f5' : 'white',
        color: todo.completed ? '#9e9e9e' : 'black',
        textDecoration: todo.completed ? 'line-through' : 'none',
      }}
    >
      <CardContent sx={{ flex: 1 }}>
        <Grid container alignItems="center" spacing={1}>
          <Grid item xs>
            {isEditing ? (
              <TextField
                fullWidth
                variant="outlined"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
              />
            ) : (
              <Typography variant="body1">{todo.title}</Typography>
            )}
          </Grid>
          <Grid item>
            {isEditing ? (
              <>
                <IconButton
                  aria-label="save"
                  onClick={handleSave}
                  size="large"
                  color="success" // Green color for success
                >
                  <CheckCircleIcon />
                </IconButton>
                <IconButton
                  aria-label="cancel"
                  onClick={handleCancel}
                  size="large"
                  color="error" // Red color for error
                >
                  <CancelIcon />
                </IconButton>
              </>
            ) : (
              <>
                <IconButton
                  aria-label="edit"
                  onClick={handleEdit}
                  size="large"
                  color="primary"
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  aria-label="delete"
                  onClick={handleDelete}
                  size="large"
                  color="error"
                >
                  <DeleteOutlineOutlinedIcon />
                </IconButton>
                <IconButton
                  aria-label="toggle-completion"
                  onClick={handleToggle}
                  size="large"
                  color="default"
                >
                  {todo.completed ? <DoneIcon /> : <CheckCircleOutlineIcon />}
                </IconButton>
              </>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
