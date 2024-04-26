
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';



export const Header = () => {

  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');


  const handleSubredditChange = (searchValue ) => {
    // Do whatever you need with the subreddit value
    console.log('Selected subreddit:', searchValue);
  };


  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <form onSubmit={(event) => handleSubredditChange(searchValue)}>
<input
  type="text"
  placeholder="Search posts..."
  value={searchValue}
  onChange={handleChange} //letters show in box when you type them
  
/>
    <button type="submit">Search</button>
  </form>
  );
};