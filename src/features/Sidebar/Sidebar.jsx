import React from 'react';
import { useDispatch } from 'react-redux';
import { changeSubreddit } from '../../reducers/subredditReducer'; // Import the action creator


export const Sidebar = () => {
  const dispatch = useDispatch();

  const handleSubredditChange = (newSubreddit) => {
    dispatch(changeSubreddit(newSubreddit));
    console.log("£handlerunning") // Dispatch the action with the new subreddit
  };

  return (
    <div>
      {/* Example of changing the subreddit */}
      <button onClick={() => handleSubredditChange('/r/FantasyPL')}>
        Change Subreddit to FPL 
      </button>

      <button onClick={() => handleSubredditChange('/r/doctorwho')}>
        Change Subreddit to Doctor Who
      </button>
      <button onClick={() => handleSubredditChange('/r/harrypotter')}>
        Change Subreddit to Harry Potter
      </button>
    </div>
  );
};
