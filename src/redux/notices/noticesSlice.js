import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchNoticesByCategory } from './operations';

const initialState = {
  items: [],
  isLoading: false,
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
      .addMatcher(isAnyOf(fetchNoticesByCategory.pending), state => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(fetchNoticesByCategory.rejected), state => {
        return { ...state, items: [], totalPages: null, isLoading: false };
      });
  },
  reducers: {},
});
