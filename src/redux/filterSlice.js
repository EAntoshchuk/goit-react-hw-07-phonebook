import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    filterContacts(state, { payload }) {
      state.filter = payload;
    },
  },
});

export default filterSlice.reducer;
export const { filterContacts } = filterSlice.actions;
