import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import FilterContact from './FilterContact/FilterContact';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectIsloading, selectError } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsloading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <FilterContact />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </div>
  );
}
