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


export const fetchDataAndOpenModal = createAsyncThunk(
  'notices/fetchByNoticeId',
   async (noticeId, thunkApi)=> {
    console.log(noticeId)
   try{
    const response = await axios.get(`/api/notices/notice/${noticeId}`)
    const data = response.data;
    return data;
   } catch(error){
    return thunkApi.rejectWithValue(error.message)
   }

}) 

export const addToFavorite = createAsyncThunk(
  '/notices/favorite', 
  async (noticeId, thunkApi) => {
    console.log(noticeId)
    try {
      return await axios.patch(`/api/notices/${noticeId}/favorite`)
       
    } catch (error) {
      return thunkApi.rejectWithValue(error.message)
    }
  })