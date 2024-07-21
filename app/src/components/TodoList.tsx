// src/components/TodoList.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, selectTodos } from '../redux/todosSlice';
import { TodoForm } from './TodoForm';
import { Todo } from '../redux/todosSlice';
import { Button, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const TodoList: React.FC = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  const [editingTodo, setEditingTodo] = React.useState<Todo | null>(null);

  const handleEdit = (todo: Todo) => {
    setEditingTodo(todo);
  };

  const handleDelete = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleComplete = (id: string) => {
    dispatch(toggleTodo(id));
  };

  const handleCloseForm = () => {
    setEditingTodo(null);
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setEditingTodo({ title: '', completed: false })}
      >
        Add New Todo
      </Button>
      {editingTodo && (
        <TodoForm todo={editingTodo} onClose={handleCloseForm} />
      )}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.title}
            </span>
            <div>
              <IconButton onClick={() => handleEdit(todo)} aria-label="edit">
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => handleDelete(todo.id)} aria-label="delete">
                <DeleteOutlineOutlinedIcon />
              </IconButton>
              <IconButton onClick={() => handleToggleComplete(todo.id)} aria-label="toggle complete">
                <CheckCircleOutlineIcon color={todo.completed ? 'success' : 'action'} />
              </IconButton>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
