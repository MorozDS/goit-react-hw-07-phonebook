import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import FilterContact from './FilterContact/FilterContact';

export default function App() {
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

      <ContactList />
    </div>
  );
}
