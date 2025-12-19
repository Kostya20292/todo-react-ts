import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ToDo } from '../../models/todo-item';
import { notifyCreate, notifyDelete, notifyUpdate } from '../../utils/notifications';

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
        id: state.todos.length,
        text: action.payload,
        isDone: false,
      });

      notifyCreate();
    },
    updateTodo: (state, action: PayloadAction<ToDo>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);

      if (todo) {
        todo.isDone = !todo.isDone;
      }

      notifyUpdate();
    },
    deleteTodo: (state, action: PayloadAction<ToDo>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);

      notifyDelete();
    },
  },
});

export const { createTodo, updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
