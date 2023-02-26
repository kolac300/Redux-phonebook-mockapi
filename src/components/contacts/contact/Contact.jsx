import { Li } from './Contact.styled';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'Redux/operations';

export const Contact = ({ name, number, id, createdAt }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id))
  }

  return (
    <Li>


      {name}: {number}
      <br />
      {' was created at: ' + createdAt}

      <button onClick={handleDelete} >Delete</button>
    </Li>
  );
};
Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};
