import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/filtersSlice';
import { Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.status?.value.toLowerCase());
  const [inputValue, setInputValue] = useState(filter || '');

  const handleChange = event => {
    const value = event.target.value.toLowerCase();
    setInputValue(value);
    dispatch(setStatusFilter(value));
  };

  return (
    <label>
      <Input
        type="text"
        placeholder="Please enter name"
        value={inputValue}
        onChange={handleChange}
      />
    </label>
  );
};

export default Filter;
