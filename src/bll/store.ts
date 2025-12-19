import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todo/todoSlice';
import formReducer from './form/formSlice';
import { loadFromLocalStorage, saveToLocalStorage } from '../utils/localStorage';

type PreloadedState = { todoReducer: ReturnType<typeof todoReducer> };

export const store = configureStore({
  reducer: {
    todoReducer,
    formReducer,
  },
  preloadedState: loadFromLocalStorage<PreloadedState>(),
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
