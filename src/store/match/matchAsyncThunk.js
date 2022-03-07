import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../service/defaultClient';

export const getMatch = createAsyncThunk(
  'user/match',
  async ({ nickName, gameType }) => {
    const getAccessId = await axios.get(`/nickname/${nickName}`);
    const match = await axios.get(
      `/${getAccessId.data.accessId}/matches?start_date=&end_date= &offset=0&limit=10&match_types=${gameType}`,
    );

    return match.data;
  },
);
