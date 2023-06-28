import { configureStore } from '@reduxjs/toolkit';
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
import storage from 'redux-persist/lib/storage';
import { contactSlice } from './contactSlice';

const persistConfig = {
  key: 'contacts',
  storage,
};

export const persistContactsReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);

export const store = configureStore({
  reducer: {
    contacts: persistContactsReducer,
    filter: '',
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
