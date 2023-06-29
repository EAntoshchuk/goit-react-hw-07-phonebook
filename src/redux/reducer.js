import { persistReducer } from 'redux-persist';
import { storage } from 'redux-persist/lib/storage';
import { contactSlice } from './contactSlice';
import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as contactsActions from './actions';

const persistConfig = {
  key: 'root',
  storage,
};

export const valueReducer = persistReducer(persistConfig, contactSlice.reducer);

const entitiies = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [contactsActions.fetchContactsRequest]: () => true,
  [contactsActions.fetchContactsSuccess]: () => false,
  [contactsActions.fetchContactsError]: () => false,
});

export default combineReducers({
  entitiies,
  isLoading,
});
