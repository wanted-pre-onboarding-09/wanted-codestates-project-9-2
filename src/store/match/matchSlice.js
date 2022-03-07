import { createSlice } from '@reduxjs/toolkit';
import { getMatch } from './matchAsyncThunk';
import tracks from '../../data/track.json';
import karts from '../../data/kart.json';

const initialState = {
  loading: false,
  error: false,
  data: {
    nickName: '',
    match: null,
    matchType: '',
    level: 0,
  },
};

const matchSlice = createSlice({
  name: 'userMatch',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMatch.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMatch.fulfilled, (state, { payload }) => {
      state.data.nickName = payload.nickName;
      state.data.level = payload.level;
      const character = [];
      state.data.match = payload.matches[0].matches.map((el) => {
        character.push(el.character);
        return {
          matchId: el.matchId,
          matchRank: el.player.matchRank,
          endTime: el.endTime,
          playerCnt: el.playerCount,
          matchWin: el.player.matchWin,
          matchRetired: el.player.matchRetired,
          trackId: tracks.find((track) => track.id === el.trackId).name,
          trackHash: el.trackId,
          kart: karts.find((kart) => kart.id === el.player.kart).name,
          kartHash: el.player.kart,
          matchTime: el.player.matchTime,
        };
      });
      const [char] = [...new Set(character)];
      state.data.character = char;
      state.loading = false;
    });
    builder.addCase(getMatch.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

// export const { builder } = userSlice.actions;

export default matchSlice.reducer;
