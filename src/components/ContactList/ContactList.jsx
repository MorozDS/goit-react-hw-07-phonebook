import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';

import { deleteContact } from 'redux/operations';
import { renderContactList } from 'redux/selectors';

export default function ContactList() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(renderContactList);

  console.log(filteredContacts);

  return (
    <ul className={s.list}>
      {filteredContacts.map(contact => (
        <li key={contact.id} id={contact.id} className={s.item}>
          {contact.name}: {contact.phone}
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
