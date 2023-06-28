const { createSlice } = require('@reduxjs/toolkit');

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact: (state, { payload }) => {
      state.contacts.push(payload);
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
    filterContacts(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { addContact, deleteContact, filterContacts } =
  contactSlice.actions;
