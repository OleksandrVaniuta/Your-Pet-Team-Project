import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchNoticesByCategory, addToFavorite } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  isFavorite: false,
  // itemId : null,
};

export const noticesSlice = createSlice({
  name: 'notices',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchNoticesByCategory.fulfilled, (state, action) => {
        return {
          ...state,
          items: [...action.payload.notices],
          totalPages: action.payload.totalPages,
          isLoading: false,
        };
      })
      // .addCase(addToFavorite.fulfilled, state => {
      //   state.isFavorite = true;
      // })
      .addMatcher(isAnyOf(fetchNoticesByCategory.pending), state => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(fetchNoticesByCategory.rejected), state => {
        return { ...state, items: [], totalPages: null, isLoading: false };
      })
      // .addMatcher(isAnyOf(addToFavorite.pending, state => { state.isLoading = true;
      // }))
      // .addMatcher(isAnyOf(addToFavorite.rejected, state => { 
      //   state.isLoading = false;
      //   state.isFavorite = false;
      // }))
  },
  reducers: {},
});
