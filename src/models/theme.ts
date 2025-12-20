export interface Theme {
  name: 'light' | 'dark';
  colors: {
    backgroundPrimary: string;
    backgroundSecondary: string;
    text: string;
    textMuted: string;
    card: string;
    cardText: string;
    accent: string;
    border: string;
  };
}

export interface Themes {
  [key: string]: Theme;
}
