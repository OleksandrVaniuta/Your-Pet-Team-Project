import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './Auth/AuthSlicer';
import { noticesSlice } from './notices/noticesSlice';
import { newsSlice } from './News/newsSlice';
import { profileReducer } from './Profile/ProfileSlicer';
import { petsReducer } from './AddPets/AddPetsSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { friendsSlice } from './friends/slice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    notices: noticesSlice.reducer,
    news: newsSlice.reducer,
    profile: profileReducer,
    friends: friendsSlice.reducer,
    add: petsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
