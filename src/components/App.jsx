import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { fetchContact } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';
import Loader from './Loader/Loader';
import { Container, Title, SecondTitle } from './App.styled';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <SecondTitle>Contacts</SecondTitle>
      <Filter />
      {isLoading && <Loader />}
      {error && <div>Error: {error}</div>}
      <ContactList />
    </Container>
  );
}
