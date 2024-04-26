import React from 'react';
import { useDispatch } from 'react-redux';
import { changeSubreddit } from '../../reducers/subredditReducer'; // Import the action creator


export const Header = () => {
  const dispatch = useDispatch();


    return (
        <form onSubmit={console.log('bosh')}>
          <input
            type="text"
            placeholder="Search posts..."
           
          />
          <button type="submit">Search</button>
        </form>
      );

};
