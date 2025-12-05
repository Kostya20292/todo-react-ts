import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/scss/index.scss';
import { ToDoListPage } from './ui/pages/ToDoListPage/ToDoListPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToDoListPage />
  </StrictMode>
);
