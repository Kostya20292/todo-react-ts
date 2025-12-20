import { createBrowserRouter } from 'react-router-dom';

import { Layout } from './layouts/Layout';
import { ToDoListPage } from './pages/ToDoListPage/ToDoListPage';
import { ViewListPage } from './pages/ViewListPage/ViewListPage';
import { ViewListItemPage } from './pages/ViewListItemPage/ViewListItemPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

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
