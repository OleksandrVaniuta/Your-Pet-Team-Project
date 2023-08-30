import { createSlice } from '@reduxjs/toolkit';

import {
  register,
  login,
  logout,
  refresh,
  updateUser,
  updateAvatar,
} from './AuthOperations';

const AuthInitialState = {
  user: {
    name: null,
    email: null,
    phone: null,
    birthday: null,
    city: null,
    avatarURL: null,
    id: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: true,
  isVisitFirst: true,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: AuthInitialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user.email = action.payload.email;
      state.user.name = action.payload.name;
      state.token = action.payload.accessToken;
      // state.isLoggedIn = true;
      // state.isRefreshing = false;
    },
    [register.rejected](state, action) {
      state.isLoggedIn = false;
    },
    [login.fulfilled](state, action) {
      state.user.email = action.payload.email;
      state.user.user = action.payload.user;
      state.token = action.payload.accessToken;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [login.rejected](state, action) {
      state.isLoggedIn = false;
      state.error = action.payload.message;
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
      // state.user = action.payload;
      // state.token = action.payload.accessToken;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.user.email = action.payload.email;
      state.user.name = action.payload.name;
      state.user.phone = action.payload.phone;
      state.user.birthday = action.payload.birthday;
      state.user.city = action.payload.city;
      state.user.avatarURL = action.payload.avatarURL;
      state.user.id = action.payload._id;
    },
    [refresh.rejected](state) {
      state.isRefreshing = false;
    },
    [updateUser.fulfilled](state, action) {
      // state.isLoggedIn = true;
      // state.isRefreshing = false;
      state.user.email = action.payload.email;
      state.user.name = action.payload.name;
      state.user.phone = action.payload.phone;
      state.user.birthday = action.payload.birthday;
      state.user.city = action.payload.city;
    },
    [updateAvatar.fulfilled](state, action) {
      state.user.avatarURL = action.payload.avatarURL;
    },
  },
});

export const authReducer = authSlice.reducer;
