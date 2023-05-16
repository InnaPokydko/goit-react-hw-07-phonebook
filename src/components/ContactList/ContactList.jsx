import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactListSlice';
import ContactItem from 'components/ContactItem/ContactItem';
import { Contacts } from './ContactList.styled';

const ContactList = () => {
  const contactsState = useSelector(state => state.contacts.contactsArr);
    const dispatch = useDispatch();
  const filterState = useSelector(state => state.filter);

  function getVisibleContacts() {
    const normalizedFilter = filterState.toLowerCase();
    return contactsState.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  const deleteContactHandler = id => {
    dispatch(deleteContact(id));
  };

  return (
    <Contacts>
      {getVisibleContacts().map(contact => (
        <ContactItem key={contact.id} contact={contact} onDelete={deleteContactHandler} />
      ))}
    </Contacts>
  );
};

export default ContactList;







