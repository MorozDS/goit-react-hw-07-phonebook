import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { contactsReducer, deleteContact } from 'redux/contactsSlice';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch(contactsReducer);

  const renderContactList = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <ul className={s.list}>
      {renderContactList().map(contact => (
        <li key={contact.id} id={contact.id} className={s.item}>
          {contact.name}: {contact.number}
          <button
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
            className={s.button}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
