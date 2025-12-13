import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './ui/layouts/Layout';
import { HomePage } from './ui/pages/HomePage/HomePage';
import { ToDoListPage } from './ui/pages/ToDoListPage/ToDoListPage';
import { ItemDescription } from './ui/pages/ItemDescription/ItemDescription';
import { NotFound } from './ui/pages/NotFound/NotFound';
import type { ToDo } from './models/todo-item';

const todos: ToDo[] = [
  { id: 0, text: 'First', isDone: false },
  { id: 1, text: 'Second', isDone: true },
  { id: 2, text: 'Third', isDone: false },
  { id: 3, text: 'Fourth', isDone: true },
];

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <HomePage todos={todos} /> },
      { path: 'list/:id', element: <ItemDescription todos={todos} /> },
      { path: 'todo', element: <ToDoListPage /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
