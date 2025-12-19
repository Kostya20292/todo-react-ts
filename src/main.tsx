import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { Provider } from 'react-redux';
import { store } from './bll/store';
import { GlobalStyle } from './styles/GlobalStyle';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
