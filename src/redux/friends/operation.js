import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://your-pet-backend-cmwy.onrender.com';

export const getAllFriends = createAsyncThunk(
    '/friends',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/api/friends');
            return response.data;
        } catch (error) {
           return thunkAPI.rejectWithValue('');
        }
    }
);


