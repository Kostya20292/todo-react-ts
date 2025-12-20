import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

import type { ToDo } from '../../models/todo-item';

interface TodoState {
  todos: ToDo[];
}

const initialState: TodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    createTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: uuid(),
        text: action.payload,
        isDone: false,
      });
    },
    updateTodo: (state, action: PayloadAction<ToDo>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);

      if (todo) {
        todo.isDone = !todo.isDone;
      }
    },
    deleteTodo: (state, action: PayloadAction<ToDo>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { createTodo, updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
