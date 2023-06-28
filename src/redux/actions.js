import { nanoid } from 'nanoid';

export const addContact = text => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      text,
    },
  };
};

export const deleteContact = taskId => {
  return {
    type: 'contacts/deleteContact',
    payload: taskId,
  };
};

export const setStatusFilter = value => {
  return {
    type: 'filters/setStatusFilter',
    payload: value,
  };
};
