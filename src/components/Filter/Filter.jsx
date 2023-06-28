import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/contactSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);
  const filterUpdate = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };

  return (
    <label className={css.filter_label}>
      <div className={css.filter_title}>Filter by contact name</div>
      <input
        className={css.filter_input}
        type="text"
        value={filter}
        onChange={filterUpdate}
      />
    </label>
  );
};

export default Filter;
