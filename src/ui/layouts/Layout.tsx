import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import type { RootState } from '../../bll/store';

import { Header } from '../components/Header/Header';

import { GlobalStyle } from '../../styles/GlobalStyle';

export const Layout = () => {
  const { theme } = useSelector((state: RootState) => state.theme);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle theme={theme} />
        <Header />
        <Outlet />
      </ThemeProvider>
    </>
  );
};
