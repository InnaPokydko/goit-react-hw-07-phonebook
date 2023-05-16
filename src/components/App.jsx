import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Container, Title, SecondTitle } from './App.styled';

export default function App() {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <SecondTitle>Contacts</SecondTitle>
      <Filter />
      <ContactList />
    </Container>
  );
}



// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';
// import { Container, Title, SecondTitle } from './App.styled';
// import { addContact, deleteContact } from 'redux/contactListSlice';
// import { setStatusFilter } from 'redux/filtersSlice';

// export default function App() {
//   const contacts = useSelector(state => state.contacts.contactsArr);
//   const filter = useSelector(state => state.filter.status);
//   const dispatch = useDispatch();

//   const addContactHandler = ({ name, number }) => {
//     // Перевірка на дублювання контактів
//     const existingContact = contacts.find(
//       contact => contact.name.toLowerCase() === name.toLowerCase()
//     );
//     if (existingContact) {
//       alert('This contact already exists!');
//       return;
//     }

//     dispatch(addContact({ name, number }));
//   };

//   const deleteContactHandler = id => {
//     dispatch(deleteContact(id));
//   };

//   const changeFilterHandler = event => {
//     dispatch(setStatusFilter(event.target.value));
//   };

//   const filteredContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <Container>
//       <Title>Phonebook</Title>
//       <ContactForm onSubmit={addContactHandler} />
//       <SecondTitle>Contacts</SecondTitle>
//       <Filter value={filter} onChange={changeFilterHandler} />
//       <ContactList contacts={filteredContacts} onDelete={deleteContactHandler} />
//     </Container>
//   );
// }
