import * as contactsActions from './actions';
import * as contactsAPI from './../components/api/contacts-api';

export const fetchContacts = () => async dispatch => {
  dispatch(contactsActions.fetchContactsRequest());

  const contacts = await contactsAPI.fetchContacts();
  dispatch(contactsActions.fetchContactsSuccess(contacts));
};
