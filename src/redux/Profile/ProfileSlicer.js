import { createSlice } from '@reduxjs/toolkit';

import { updateProfile } from './ProfileOperations';

const ProfileState = {
  user: {
    name: null,
    email: null,
    phone: null,
    birthday: null,
    city: null,
    avatarURL: null,
  },
  pets: [],
  isUpdating: false,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState: ProfileState,
  extraReducers: {
    [updateProfile.pending](state) {
      state.isUpdating = true;
    },
    [updateProfile.fulfilled](state, action) {
      state.isUpdating = false;
      state.user.email = action.payload.user.email;
      state.user.name = action.payload.user.name;
      state.user.phone = action.payload.user.phone;
      state.user.birthday = action.payload.user.birthday;
      state.user.city = action.payload.user.city;
      state.user.avatarURL = action.payload.user.avatarURL;
      state.pets = action.payload.userPets;
    },
  },
});

export const profileReducer = profileSlice.reducer;
