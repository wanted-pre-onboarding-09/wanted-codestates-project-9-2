import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../service/defaultClient';

export const getMatch = createAsyncThunk(
  'user/match',
  async ({ nickName, gameType }) => {
    const getAccessId = await axios.get(`users/nickname/${nickName}`);
    const match = await axios.get(
      `users/${getAccessId.data.accessId}/matches?start_date=&end_date= &offset=0&limit=200&match_types=${gameType}`,
    );

    return match.data;
  },
);

export const getUniqueMatch = createAsyncThunk(
  'user/uinqueMatch',
  async ({ matchId }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/matches/${matchId}`);
      console.log(response);
      return response;
    } catch (error) {
      const err = error;
      if (!err.response) {
        throw error;
      }
      return rejectWithValue(err.response.data);
    }
  },
);
