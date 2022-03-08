import { createSlice } from '@reduxjs/toolkit';
import { getMatchList } from './matchListAsyncThunk';

const initialState = {
  loading: false,
  error: false,
  data: null,
};

const rankingSlice = createSlice({
  name: 'matchList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMatchList.pending, (state) => {
      state.loading = true;
      state.error = false;
      state.data = null;
    });
    builder.addCase(getMatchList.fulfilled, (state, { payload }) => {
      state.data = payload.map((solo) => {
        return {
          nickName: solo.nickName,
          playTime: solo.matches[0].matches.length,
          win: solo.matches[0].matches.filter(
            (el) => el.player.matchWin === '1',
          ).length,
          Retired: solo.matches[0].matches.filter(
            (el) => el.player.matchRetired === '1',
          ).length,
          character: solo.matches[0].matches.map(
            (el) => el.player.character,
          )[0],
          kart: solo.matches[0].matches.map((el) => el.player.kart)[0],
          ranking: solo.matches[0].matches.map((el) => el.player.matchRank),
        };
      });
      state.loading = false;
    });
    builder.addCase(getMatchList.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export default rankingSlice.reducer;
