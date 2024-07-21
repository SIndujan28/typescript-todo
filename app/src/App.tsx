// src/App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { TodosPage } from './pages/TodosPage';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <TodosPage />
    </Provider>
  );
};

export default App;
