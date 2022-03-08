import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import matchSlice from './match/matchSlice';
import matchListSlice from './matchList/matchListSlice';
import playerSlice from './player/playerSlice';

const reducers = combineReducers({
  match: matchSlice,
  matchList: matchListSlice,
  player: playerSlice,
});

const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
