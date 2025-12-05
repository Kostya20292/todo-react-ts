import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import { ToDoList } from './ui/pages/ToDoList/ToDoList';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToDoList />
  </StrictMode>
);
