import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
// import { useSelector } from '@mui/base';
// import { selectToken } from 'redux/Auth/AuthSelectors';

// const accessToken = useSelector(selectToken); 

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
   try{
    const response = await axios.get(`/api/notices/notice/${noticeId}`, noticeId)
    const data = response.json();
    return data;
   } catch(error){
    return thunkApi.rejectWithValue(error.message)
   }

}) 

export const addToFavorite = createAsyncThunk(
  '/notices/favorite', 
  async (noticeId, thunkApi) => {
    try {
      const response = await axios.patch(`/api/notices/${noticeId}/favorite`)
      return response;
      
    } catch (error) {
      return thunkApi.rejectWithValue(error.message)
    }
  })

// export const addToFavorit = async (id) => {
//   try {
//    const response = await axios.patch(
//       `https://your-pet-backend-cmwy.onrender.com/api/notices/${id}/favorite`,
//       {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       }
//     );
//     setIsFavorited(prevState => !prevState);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
//   };