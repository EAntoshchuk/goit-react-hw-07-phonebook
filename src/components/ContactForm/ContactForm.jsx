import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import { getContactSelector } from 'redux/selectors';
import css from './ContactForm.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();
  const [name] = useState('');
  const contacts = useSelector(getContactSelector);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const newContactName = form.elements.name.value;
    const newContactNumber = form.elements.number.value;
    if (contacts.find(({ name }) => name === newContactName)) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact({ name: newContactName, number: newContactNumber }));
    }
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.form_label}>
        <div className={css.form_title}>Name</div>

        <input
          className={css.form_input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.form_label}>
        <div className={css.form_title}>Number</div>

        <input
          className={css.form_input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={css.btn}>
        Add contact
      </button>
    </form>
  );
}
