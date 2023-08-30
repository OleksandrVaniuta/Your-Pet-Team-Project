import { createSlice } from '@reduxjs/toolkit';
import { 
  fetchNoticesByCategory, 
  fetchDataAndOpenModal, 
  addToFavorite,
  fetchNoticesFavorite, 
  fetchNoticesMyAds 
} from './operations';

const initialState = {
  items: [],
  totalPages: null,
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
      .addCase(fetchNoticesByCategory.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchNoticesByCategory.rejected, state => {
        return { ...state, items: [], totalPages: null, isLoading: false };
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
      .addCase(fetchNoticesFavorite.fulfilled, (state, action) => {
        return {
          ...state,
          items: [...action.payload.notices],
          totalPages: action.payload.totalPages,
          isLoading: false,
        };
      })
      .addCase(fetchNoticesFavorite.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchNoticesFavorite.rejected, state => {
        return { ...state, items: [], totalPages: null, isLoading: false };
      })
      .addCase(fetchNoticesMyAds.fulfilled, (state, action) => {
        return {
          ...state,
          items: [...action.payload.notices],
          totalPages: action.payload.totalPages,
          isLoading: false,
        };
      })
      .addCase(fetchNoticesMyAds.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchNoticesMyAds.rejected, state => {
        return { ...state, items: [], totalPages: null, isLoading: false };
      });
  },
  reducers: {},
});
