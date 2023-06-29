import axios from 'axios';

axios.defaults.baseURL = 'https://649caa3d0480757192386d9c.mockapi.io/';

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function fetchContactsById(contactId) {
  const { data } = await axios.get(`/contacts/${contactId}`);
  return data;
}
