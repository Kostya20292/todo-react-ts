import type { Theme, Themes } from './theme';

const light: Theme = {
  name: 'light',
  colors: {
    backgroundPrimary: '#4682b4',
    backgroundSecondary: '#edf0f1',
    text: '#333',
    textMuted: '#aaa',
    card: '#fff',
    cardText: '#444',
    accent: '#4682b4',
    border: '#d8e5e0',
  },
};

const dark: Theme = {
  name: 'dark',
  colors: {
    backgroundPrimary: '#1a1a2e',
    backgroundSecondary: '#16213e',
    text: '#e8e8e8',
    textMuted: '#888',
    card: '#0f3460',
    cardText: '#e8e8e8',
    accent: '#e94560',
    border: '#1a1a2e',
  },
};

export const themes: Themes = {
  light,
  dark,
};
