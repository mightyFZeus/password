import { combineReducers } from '@reduxjs/toolkit';

import settingsSlice from '@/slices/settingsSlice';

export const rootReducer = combineReducers({
  settings: settingsSlice,
});
