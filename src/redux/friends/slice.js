import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getAllFriends } from "./operation";

const initialState = {
    items: [],
    isLoading: false,
};

export const friendsSlice = createSlice({
    name: 'friends',
    initialState,
    extraReducers: builder => {
        builder
        .addCase(getAllFriends.fulfilled,
        ( state, action ) => {
            return {...state,
            items: action.payload,
            isLoading: false,
            };
        })
        .addMatcher(isAnyOf(getAllFriends.pending), state => {
            state.isLoading = true;
        })
        .addMatcher(isAnyOf(getAllFriends.rejected), state => {
            return {...state,
            items : [],
           isLoading : false,
        }
          
        });
    },
    reducers: {},
})

