import { createSlice } from '@reduxjs/toolkit';

import type { Theme } from '../../models/theme';
import { themes } from '../../models/themes';

interface ThemState {
  theme: Theme;
}

const initialState: ThemState = {
  theme: themes.light,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeThemes: (state) => {
      state.theme = state.theme.name === 'light' ? themes.dark : themes.light;
    },
  },
});

export const { changeThemes } = themeSlice.actions;

export default themeSlice.reducer;
