import React from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

export const TodosPage: React.FC = () => {
  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};