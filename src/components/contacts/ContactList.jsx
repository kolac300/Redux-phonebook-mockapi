import { Contact } from './contact/Contact';
import { SearchWrapper } from './Contacts.styled';
import React from 'react';
import { useSelector } from 'react-redux';
import { getContacts, getStatusFilter } from 'Redux/selector';


const getFiltredContacts = (contacts, filter) => {
  if (contacts.length) {
    return contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .includes(filter
          .toLowerCase()))
  }
  return []
};
export const ContactList = () => {
  const contacts = useSelector(getContacts)
  const filter = useSelector(getStatusFilter);
  const filtredContacts = getFiltredContacts(contacts, filter)
  return (
    <>
      <SearchWrapper>
        <ul>
          {filtredContacts.map(contact => (
            <Contact
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.phone}
              createdAt={contact.createdAt}
            />
          ))}
        </ul>
      </SearchWrapper>
    </>
  );
};
