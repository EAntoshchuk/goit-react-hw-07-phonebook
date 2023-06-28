import { persistReducer } from 'redux-persist';
import { storage } from 'redux-persist/lib/storage';
import { contactSlice } from './contactSlice';

const persistConfig = {
  key: 'root',
  storage,
};

export const valueReducer = persistReducer(persistConfig, contactSlice.reducer);
