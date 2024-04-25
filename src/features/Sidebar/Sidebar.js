import React from 'react';
import { useDispatch } from 'react-redux';
import { changeSubreddit } from '../../reducers/subredditReducer'; // Import the action creator

export const Sidebar = () => {
  const dispatch = useDispatch();

  // Function to handle click on Arsenal button
  const handleArsenalClick = () => {
    dispatch(changeSubreddit('/r/arsenal')); // Dispatch action to change subreddit
  };

  // Function to handle click on Man City button
  const handleManCityClick = () => {
    dispatch(changeSubreddit('/r/ManCity')); // Dispatch action to change subreddit
  };

  return (
    <div className="sidebar">
      <h2>Subreddits</h2>
      <button onClick={handleArsenalClick}>Arsenal</button>
      <button onClick={handleManCityClick}>Man City</button>
    </div>
  );
};