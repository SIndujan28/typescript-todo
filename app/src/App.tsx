import React from 'react';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { TodoPage } from './pages/TodosPage';
import './App.css'

export const App: React.FC = () => {
  return (
    <div className="app">      
    <Provider store={store}>
      <CssBaseline />
      <TodoPage />
      </Provider>
    </div>
  );
};
