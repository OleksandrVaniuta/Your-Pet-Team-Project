import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchNoticesByCategory, fetchDataAndOpenModal, addToFavorite  } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  isFavorite: false,
  notice: {},
  noticeFavorite: [],
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
      .addCase(fetchDataAndOpenModal.fulfilled, (state, action) => {
        return {
          ...state,
          notice: {...action.payload},
        };
      })
      .addCase(addToFavorite.fulfilled, (state, action) => {
        state.isFavorite = action.payload;
        state.noticeFavorite = [...action.payload];
      })      
      .addMatcher(isAnyOf(fetchNoticesByCategory.pending), state => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(fetchNoticesByCategory.rejected), state => {
        return { ...state, items: [], isLoading: false };
      })
      // reducers: {}
}
});
