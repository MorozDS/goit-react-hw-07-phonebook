import s from './FilterContact.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { contactsReducer } from 'redux/contactsSlice';
import { filterContacts } from 'redux/contactsSlice';
import { selectFilter } from 'redux/selectors';

export default function FilterContact() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch(contactsReducer);
  const onChange = event => dispatch(filterContacts(event.target.value));

  return (
    <>
      <p className={s.filterheader}>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        onChange={onChange}
        value={filter}
        className={s.input}
      />
    </>
  );
}
