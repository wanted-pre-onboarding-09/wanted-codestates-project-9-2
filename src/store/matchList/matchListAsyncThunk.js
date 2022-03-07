import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../service/defaultClient';

export const getMatchList = createAsyncThunk(
  'user/matchList',
  async ({ gameType, offset = 0, iimit = 30 }) => {
    const getAllMatch = await axios.get(
      `/matches/all?start_date=&end_date=&offset=${offset}&limit=${iimit}&match_types=${gameType}`,
    );

    const getRankingList = await Promise.all(
      getAllMatch.data.matches[0].matches.map(async (el) => {
        const test2 = await axios.get(`/matches/${el}`);
        return test2.data;
      }),
    );
    return getRankingList;
  },
);
