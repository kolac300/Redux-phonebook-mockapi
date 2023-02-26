import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from 'Redux/filterSlice';
import { getStatusFilter } from 'Redux/selector';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);
  const handleFilterChange = e =>
    dispatch(setStatusFilter(e.target.value));

  return (
    <>
      <label>Find contacts by name or phone</label>
      <br />
      <input type="text" value={filter} onChange={handleFilterChange} />
    </>
  );
};