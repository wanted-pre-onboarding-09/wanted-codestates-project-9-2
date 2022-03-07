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
      state.data = [...payload]
        .map((el) => {
          const player = el.players ? el.players[0] : el.teams[0].players[0];
          return {
            character: player.character,
            nickName: player.characterName,
            playTime: el.playTime,
            kart: player.kart
              ? player.kart
              : 'f7724634e3a539e6f45cbfa30eb90074081fcb2abddeff6f035d06191d784931',
            rank: player.matchRank === '99' ? '8' : player.matchRank,
            matchRetired: Math.ceil(
              (+player.matchRetired / +el.playTime) * 1000,
            ),
            score:
              el.playTime *
              (player.matchRank === '99' ? 1 : 9 - +player.matchRank),
            victory:
              Math.ceil((+player.matchWin / +el.playTime) * 1000) > 100
                ? 100
                : Math.ceil((+player.matchWin / +el.playTime) * 1000),
          };
        })
        .sort((a, b) => b.score - a.score);
      state.loading = false;
    });
    builder.addCase(getMatchList.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export default rankingSlice.reducer;
