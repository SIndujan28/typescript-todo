import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import apiClient from '../api/apiClient';
import { RootState } from './store';
import { Todo } from '../types/todo'

export interface TodosState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
}

const initialState: TodosState = {
  todos: [],
  loading: false,
  error: null,
};

// Fetch todos
export const fetchTodos = createAsyncThunk<Todo[]>('todos/fetchTodos', async () => {
  const response = await apiClient.get('/todos');
  return response.data;
});

// Add todo
export const addTodo = createAsyncThunk<Todo, Omit<Todo, 'id'>>('todos/addTodo', async (newTodo) => {
  const response = await apiClient.post('/todos', newTodo);
  return response.data;
});

// Update todo
export const updateTodo = createAsyncThunk<Todo, { id: string; updatedTodo: Partial<Todo> }>(
  'todos/updateTodo',
  async ({ id, updatedTodo }) => {
    const response = await apiClient.put(`/todos/${id}`, updatedTodo);
    return response.data;
  },
);

// Delete todo
export const deleteTodo = createAsyncThunk<string, string>('todos/deleteTodo', async (id) => {
  await apiClient.delete(`/todos/${id}`);
  return id;
});

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action: PayloadAction<Todo[]>) => {
        state.loading = false;
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch todos';
      })
      .addCase(addTodo.fulfilled, (state, action: PayloadAction<Todo>) => {
        state.todos.push(action.payload);
      })
      .addCase(updateTodo.fulfilled, (state, action: PayloadAction<Todo>) => {
        const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
        if (index >= 0) {
          state.todos[index] = action.payload;
        }
      })
      .addCase(deleteTodo.fulfilled, (state, action: PayloadAction<string>) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      });
  },
});

export default todosSlice.reducer;
export const selectTodos = (state: RootState) => state.todos.todos;
