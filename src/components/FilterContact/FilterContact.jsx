import s from './FilterContact.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterContact, contactsReducer } from 'redux/contactsSlice';

export default function FilterContact() {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch(contactsReducer);
  const onChange = event => dispatch(filterContact(event.target.value));

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
