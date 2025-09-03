import { combineReducers, configureStore } from '@reduxjs/toolkit';

import themeSlice from './themeSlice';
import userSlice from './userSlice';

const rootReducer = combineReducers({
  theme: themeSlice,
  user: userSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
