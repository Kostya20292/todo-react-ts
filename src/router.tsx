import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './ui/layouts/Layout';
import { ViewListPage } from './ui/pages/ViewListPage/ViewListPage';
import { ToDoListPage } from './ui/pages/ToDoListPage/ToDoListPage';
import { ViewListItemPage } from './ui/pages/ViewListItemPage/ViewListItemPage';
import { NotFoundPage } from './ui/pages/NotFoundPage/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <ToDoListPage /> },
      { path: 'list', element: <ViewListPage /> },
      { path: 'list/:id', element: <ViewListItemPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
