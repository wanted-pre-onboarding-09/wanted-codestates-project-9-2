import { createSlice } from '@reduxjs/toolkit';
import { getMatchList, addList } from './matchListAsyncThunk';

const initialState = {
  loading: false,
  error: false,
  data: [],
};

const rankingSlice = createSlice({
  name: 'matchList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMatchList.pending, (state) => {
      state.loading = true;
      state.error = false;
      state.data = [];
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

    builder.addCase(addList.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(addList.fulfilled, (state, { payload }) => {
      state.data = [
        ...state.data,
        ...payload.map((solo) => {
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
        }),
      ];
      state.loading = false;
    });
    builder.addCase(addList.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});
// export const { clearStore } = rankingSlice;

export default rankingSlice.reducer;
