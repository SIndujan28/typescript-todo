import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppDispatch } from '../redux/store';
import { updateTodo, deleteTodo } from '../redux/todosSlice';
import { Todo } from '../redux/todosSlice';

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch<useAppDispatch>();
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
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
      />
      {isEditing ? (
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
      ) : (
        <span>{todo.title}</span>
      )}
      {isEditing ? (
        <>
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};