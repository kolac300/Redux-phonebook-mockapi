import { ContactList } from './contacts/ContactList';
import { PhoneBook } from './phoneBook/PhoneBook';
import { Filter } from './filter/Filter';
import { ContactsBook } from './App.styled';
import { Toaster } from 'react-hot-toast';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading } from 'Redux/selector';
import { fetchContacts } from 'Redux/operations';
export const App = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactsBook>
        <Toaster position="top-center" reverseOrder={false} />
        <PhoneBook />
        <h2>Contacts</h2>
        <Filter />
        <div> {isLoading && !error && <b>Request in progress...</b>}</div>
        <ContactList />
      </ContactsBook>
    </>
  );
};
