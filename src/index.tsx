import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { ToDoListPage } from './pages/ToDoListPage';

import './assets/scss/normalize.scss';
import './assets/scss/style.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <ToDoListPage />
  </StrictMode>
);
