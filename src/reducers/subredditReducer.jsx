// subredditReducer.js

// Define action type
export const CHANGE_SUBREDDIT = 'CHANGE_SUBREDDIT';

// Define action creator
export const changeSubreddit = (subreddit) => ({
  type: CHANGE_SUBREDDIT,
  payload: subreddit
});

// Define initial state
const initialState = {
  subreddit: '/r/FantasyPL' // Default subreddit
};

// Define reducer function
export const subredditReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SUBREDDIT:
      return { ...state, subreddit: action.payload }; // Update subreddit in state
    default:
      return state; // Return current state for unrecognized action types
  }
};
