import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchNoticesByCategory,
  fetchDataAndOpenModal,
  addToFavorite,
  fetchNoticesFavorite,
  fetchNoticesMyAds,
  deleteNotice,
} from './operations';

const initialState = {
  items: [],
  totalPages: null,
  isLoading: false,
  isFavorite: false,
  notice: {},
  noticesFavorite: [],
  noticesMyAds: [],
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
          notice: { ...action.payload },
        };
      })
      .addCase(addToFavorite.fulfilled, (state, action) => {
        state.items.forEach(item => {
          if (item._id === action.payload.id) {
            if (item.usersAddToFavorite.includes(action.payload.data.userId)) {
              const index = item.usersAddToFavorite.indexOf(
                action.payload.data.userId
              );
              item.usersAddToFavorite.splice(index, 1);
            } else {
              item.usersAddToFavorite.push(action.payload.data.userId);
            }
          }
        });
        const index = state.noticesFavorite.findIndex(
          item => item._id === action.payload.id
        );
        state.noticesFavorite.splice(index, 1);
      })
      .addCase(fetchNoticesFavorite.fulfilled, (state, action) => {
        return {
          ...state,
          noticesFavorite: [...action.payload.notices],
          totalPages: action.payload.totalPages,
          isLoading: false,
        };
      })
      .addCase(fetchNoticesFavorite.rejected, state => {
        return {
          ...state,
          noticesFavorite: [],
          totalPages: null,
          isLoading: false,
        };
      })
      .addCase(fetchNoticesMyAds.fulfilled, (state, action) => {
        return {
          ...state,
          noticesMyAds: [...action.payload.notices],
          totalPages: action.payload.totalPages,
          isLoading: false,
        };
      })
      .addCase(fetchNoticesMyAds.rejected, state => {
        return {
          ...state,
          noticesMyAds: [],
          totalPages: null,
          isLoading: false,
        };
      })
      .addCase(deleteNotice.fulfilled, (state, action) => {
        const index = state.noticesMyAds.findIndex(
          item => item._id === action.payload.id
        );
        state.noticesMyAds.splice(index, 1);
      })
      .addMatcher(
        isAnyOf(
          fetchNoticesByCategory.pending,
          fetchNoticesFavorite.pending,
          fetchNoticesMyAds.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(isAnyOf(fetchNoticesByCategory.rejected), state => {
        return { ...state, items: [], totalPages: null, isLoading: false };
      });
  },
  reducers: {},
});
