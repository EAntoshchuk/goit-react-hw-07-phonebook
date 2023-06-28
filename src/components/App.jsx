import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export default function App() {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          height: '100px',
          marginBottom: '20px',
          backgroundColor: '#acacc8',
          color: '#017fb8',
          fontSize: '35px',
        }}
      >
        React
      </div>
      <div
        style={{
          marginBottom: '20px',
          padding: '20px',
        }}
      >
        <h1 style={{ marginBottom: '20px' }}>Phonebook</h1>
        <ContactForm />
      </div>
      <div
        style={{
          padding: '20px',
        }}
      >
        <h2 style={{ marginBottom: '20px' }}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
}
