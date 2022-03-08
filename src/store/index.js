import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import matchSlice from './match/matchSlice';
import matchListSlice from './matchList/matchListSlice';

const reducers = combineReducers({
  match: matchSlice,
  matchList: matchListSlice,
});

const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
