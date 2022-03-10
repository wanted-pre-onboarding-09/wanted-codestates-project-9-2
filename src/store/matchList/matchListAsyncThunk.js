import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../service/defaultClient';

export const getMatchList = createAsyncThunk(
  'user/matchList',
  async ({ gameType, offset = 0, limit = 30 }) => {
    const allMatch = await axios.get(
      `/matches/all?start_date=2022-03-01 00:00:00&end_date=2022-03-08 00:00:00&offset=${offset}&limit=${limit}&match_types=${gameType}`,
    );
    const rankingList = await Promise.all(
      allMatch.data.matches[0].matches.map(async (el) => {
        const matchList = await axios.get(`/matches/${el}`);
        return matchList.data;
      }),
    );
    const player = await Promise.all(
      rankingList.map(async (el) => {
        const divison = el.players
          ? el.players[0].accountNo
          : el.teams[0].players[0].accountNo;
        const userMatch = await axios.get(
          `users/${divison}/matches?start_date=&end_date=&offset=&limit=200&match_types=${gameType}`,
        );
        return userMatch.data;
      }),
    );
    return player;
  },
);

export const addList = createAsyncThunk(
  'user/team',
  async ({ gameType, offset, limit = 30 }) => {
    const allMatch = await axios.get(
      `/matches/all?start_date=2022-03-01 00:00:00&end_date=2022-03-08 00:00:00&offset=${offset}&limit=${limit}&match_types=${gameType}`,
    );

    const rankingList = await Promise.all(
      allMatch.data.matches[0].matches.map(async (el) => {
        const matchList = await axios.get(`/matches/${el}`);
        return matchList.data;
      }),
    );
    const player = await Promise.all(
      rankingList.map(async (el) => {
        const divison = el.players
          ? el.players[0].accountNo
          : el.teams[0].players[0].accountNo;
        const userMatch = await axios.get(
          `users/${divison}/matches?start_date=&end_date=&offset=&limit=200&match_types=${gameType}`,
        );
        return userMatch.data;
      }),
    );
    return player;
  },
);
