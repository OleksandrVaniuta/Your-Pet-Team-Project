import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://your-pet-backend-cmwy.onrender.com';
const errorMsg = "Something's wrong. Please update page and try again";

export const fetchNoticesByCategory = createAsyncThunk(
  'notices/fetchNoticesByCategory',
  async (params, thunkAPI) => {
    const searchParams = new URLSearchParams(params);
    searchParams.forEach((value, key) => {
      if (value === '') {
        searchParams.delete(key);
      }
    });
    try {
      const response = await axios.get(
        `/api/notices/category/${params.category}?${searchParams.toString()}`
      );
      return response.data;
    } catch (error) {
      toast.error(errorMsg);
      return thunkAPI.rejectWithValue('');
    }
  }
);

export const fetchNoticesFavorite = createAsyncThunk(
  'notices/fetchNoticesFavorite',
  async (params, thunkAPI) => {
    const searchParams = new URLSearchParams(params);
    searchParams.forEach((value, key) => {
      if (value === '') {
        searchParams.delete(key);
      }
    });
    try {
      const response = await axios.get(
        `/api/notices/favorite?${searchParams.toString()}`
      );
      return response.data;
    } catch (error) {
      toast.error(errorMsg);
      return thunkAPI.rejectWithValue('');
    }
  }
);

export const fetchNoticesMyAds = createAsyncThunk(
  'notices/fetchNoticesMyAds',
  async (params, thunkAPI) => {
    const searchParams = new URLSearchParams(params);
    searchParams.forEach((value, key) => {
      if (value === '') {
        searchParams.delete(key);
      }
    });
    try {
      const response = await axios.get(
        `/api/notices/own?${searchParams.toString()}`
      );
      return response.data;
    } catch (error) {
      toast.error(errorMsg);
      return thunkAPI.rejectWithValue('');
    }
  }
);