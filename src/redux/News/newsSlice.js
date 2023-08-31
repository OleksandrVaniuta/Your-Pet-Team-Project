import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchNews } from './operations';

const initialState = {
  items: [],
  totalPages: null,
  isLoading: false,
};

export const newsSlice = createSlice({
  name: 'news',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchNews.fulfilled, (state, action) => {
        return {
          ...state,
          items: [...action.payload.news],
          totalPages: action.payload.totalPages,
          isLoading: false,
        };
      })
      .addMatcher(isAnyOf(fetchNews.pending), state => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(fetchNews.rejected), state => {
        return { ...state, items: [], totalPages: null, isLoading: false };
      });
  },
  reducers: {},
});
