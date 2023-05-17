import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactItem from 'components/ContactItem/ContactItem';
import { deleteContact } from 'redux/operations';
import { getContacts, getFilter } from 'redux/selectors';
import { Contacts } from './ContactList.styled';

const ContactList = () => {
  const contactsState = useSelector(getContacts);
  const filterState = useSelector(getFilter);
  const dispatch = useDispatch();

  function getVisibleContacts() {
    const normalizedFilter = filterState?.toLowerCase() || '';
    return contactsState.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <Contacts>
      {getVisibleContacts().map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDelete={handleDelete}
        />
      ))}
    </Contacts>
  );
};

export default ContactList;
