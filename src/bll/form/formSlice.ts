import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  text: string;
}

const initialState: FormState = {
  text: '',
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    resetText: (state) => {
      state.text = '';
    },
  },
});

export const { setText, resetText } = formSlice.actions;
export default formSlice.reducer;
