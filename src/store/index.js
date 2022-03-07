import { configureStore, combineReducers } from '@reduxjs/toolkit';
import matchSlice from './match/matchSlice';

const reducers = combineReducers({
  match: matchSlice,
});

const store = configureStore({
  reducer: reducers,
  serializableCheck: false,
});

export default store;
