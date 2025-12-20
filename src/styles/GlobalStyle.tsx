import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

import type { Theme } from '../models/theme';

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  * {
    box-sizing: border-box;
  }

  body {
    transition: background-color 0.3s ease, color 0.3s ease;
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    color: ${({ theme }) => theme.colors.text};
    padding: 50px 0 0 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 1.429;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
`;
