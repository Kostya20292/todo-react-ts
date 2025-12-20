import { configureStore } from '@reduxjs/toolkit';

import todoReducer from './todo/todoSlice';
import formReducer from './form/formSlice';
import themeReducer from './theme/themeSlice';

import { loadFromLocalStorage, saveToLocalStorage } from '../utils/localStorage';

type PreloadedState = { todo: ReturnType<typeof todoReducer> };

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    form: formReducer,
    theme: themeReducer,
  },
  preloadedState: loadFromLocalStorage<PreloadedState>(),
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
