import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSolo: true,
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeMode: (state) => !state.isSolo,
  },
});

export const { changeMode } = playerSlice.actions;
export default playerSlice.reducer;
