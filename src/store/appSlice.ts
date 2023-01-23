import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

type AppSliceType = {
  themeKey: string;
};

const initialState: AppSliceType = {
  themeKey: '1',
};

export const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    setThemeKey: (state, action) => {
      state.themeKey = action.payload;
    },
  },
});

export const { setThemeKey } = appSlice.actions;

export const selectorAppThemeKey = (state: RootState) => state.app.themeKey;

export default appSlice.reducer;
