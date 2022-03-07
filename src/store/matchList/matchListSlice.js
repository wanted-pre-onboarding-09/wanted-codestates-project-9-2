import { createSlice } from '@reduxjs/toolkit';
import { getMatchList } from './matchListAsyncThunk';
// import tracks from '../../data/track.json';
// import karts from '../../data/kart.json';

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
    });
    builder.addCase(getMatchList.fulfilled, (state, { payload }) => {
      state.data = [...payload].map((el) => {
        return {
          character: el.players[0].character,
          nickName: el.players[0].characterName,
          playTime: el.playTime,
          kart: el.kart,
          rank:
            el.players[0].matchRank === '99' ? '8' : el.players[0].matchRank,
          matchRetired: Math.ceil(
            (+el.players[0].matchRetired / +el.playTime) * 1000,
          ),
          score:
            el.playTime *
            (el.players[0].matchRank === '99'
              ? 1
              : 9 - +el.players[0].matchRank),
          victory:
            Math.ceil((+el.players[0].matchWin / +el.playTime) * 1000) > 100
              ? 100
              : Math.ceil((+el.players[0].matchWin / +el.playTime) * 1000),
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
