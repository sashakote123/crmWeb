import { createSlice } from '@reduxjs/toolkit';

import type { ICurrentUser } from './types';

const initialState: ICurrentUser = {
  firstName: 'Александр',
  lastName: 'Котихин',
  email: 'sapool@bk.ru',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
