import css from './ContactList.module.css';
import Contact from './Contact/Contact';
import { useSelector } from 'react-redux';

const getFilteredContacts = (contacts, filter) =>
  contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const filteredContacts = getFilteredContacts(contacts, filter);
  return (
    <ul className={css.contacts_list}>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact key={id} name={name} number={number} />
      ))}
    </ul>
  );
}
