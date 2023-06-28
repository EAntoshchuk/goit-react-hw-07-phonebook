import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const deleteContacts = id => dispatch(deleteContact(id));
  return (
    <li key={id} className={css.contact_item}>
      <p className={css.contact_name}>{name}:</p>
      <p className={css.contact_number}>{number}</p>
      <button
        name="btnDelete"
        className={css.btn}
        onClick={() => deleteContacts(id)}
      >
        Delete
      </button>
    </li>
  );
}
