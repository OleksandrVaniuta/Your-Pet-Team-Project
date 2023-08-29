import { createSlice } from '@reduxjs/toolkit';

import { addMyPet, addPet } from './AddpetsOperations';

export const petsSlice = createSlice({
  name: 'pets',
  initialState: {
    petsInfo: [],
    isLoading: false,
    isDone: false,
  },
  extraReducers: {
    [addMyPet.pending](state) {
      state.isUpdating = true;
    },
    [addMyPet.fulfilled](state) {
      state.isLoading = false;
    },
    [addPet.pending](state) {
      state.isUpdating = true;
    },
    [addPet.fulfilled](state) {
      state.isLoading = false;
    },
  },
});

export const petsReducer = petsSlice.reducer;
