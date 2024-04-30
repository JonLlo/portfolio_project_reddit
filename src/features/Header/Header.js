
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { setSearchTerm } from '../../reducers/searchtermReducer';




export const Header = () => {

  const dispatch = useDispatch();
  const [searchTermLocal, setSearchTermLocal] = useState('');


  const onSearchTermChange = (e) => {
    setSearchTermLocal(e.target.value);
  };

  const onSearchTermSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(searchTermLocal));
  };

  return (
    <header>
      <form className="search" onSubmit={onSearchTermSubmit}>
        <input
          type="text"
          placeholder="search"
          value={searchTermLocal}
          onChange={onSearchTermChange}
          aria-label="Search posts"
        />
        <button type="submit" aria-label="Search">
          Search
        </button>
      </form>
    </header>
  );
};