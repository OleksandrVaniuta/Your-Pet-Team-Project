import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://your-pet-backend-cmwy.onrender.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const errorMsg = 'ops, ';

export const addMyPet = createAsyncThunk(
  'notices/addPet',
  async (newPet, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    try {
      setAuthHeader(persistedToken);
      const response = await axios.post(`/api/pets`, newPet);
      return response.data;
    } catch (error) {
      if (error.response.status === 409) {
        toast.error('You already have a pet with this name');
        return thunkAPI.rejectWithValue('');
      }
      toast.error(errorMsg);
      return thunkAPI.rejectWithValue('');
    }
  }
);

export const addPet = createAsyncThunk(
  'notices/addPet',
  async (newPet, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    try {
      setAuthHeader(persistedToken);
      const response = await axios.post(`/api/notices`, newPet);
      return response.data;
    } catch (error) {
      if (error.response.status === 409) {
        toast.error('You already have a pet with this name');
        return thunkAPI.rejectWithValue('');
      }
      toast.error(errorMsg);
      return thunkAPI.rejectWithValue('');
    }
  }
);
