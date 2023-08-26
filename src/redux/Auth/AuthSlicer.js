import { createSlice } from '@reduxjs/toolkit';

import { register, login, logout, refresh } from './AuthOperations';

const AuthInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: true,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: AuthInitialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.accessToken;
      state.isLoggedIn = true;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.accessToken;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [logout.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isRefreshing = true;
    },
    [refresh.pending](state) {
      state.isRefreshing = true;
    },
    [refresh.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refresh.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
