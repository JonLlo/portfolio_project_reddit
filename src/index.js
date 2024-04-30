// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { Card } from './components/Card/Card';
import { Home } from './features/Home/Home';
import { createStore, combineReducers } from 'redux';
import { postsReducer } from './reducers/postsReducer'; // Import your postsReducer
import { counterReducer } from './reducers/counterReducer';
import { commentsReducer } from './reducers/commentsReducer';
import { subredditReducer } from './reducers/subredditReducer';
import { Sidebar } from './features/Sidebar/Sidebar';
import { Header } from './features/Header/Header';
import { searchTermReducer } from './reducers/searchtermReducer';


// Redux store
export const rootReducer = combineReducers({
  posts_red: postsReducer, // This key 'posts' will be used to access the posts slice of state
  // Add other reducers here if needed
  counter_red: counterReducer,
  comments_red: commentsReducer,
  subreddit_red: subredditReducer,
  searchterm_red: searchTermReducer
});

export const store = createStore(rootReducer);

// Action creators
export const increment = () => ({
  type: "increment",
  payload: 1
});
export const reset = () => ({
  type: "reset"
});
export const multiply = () => ({
  type: "multiply",
  payload: 2
});


// Render the app

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Header />
      <App/>
      <Sidebar/>
      <Home />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// Log initial state and subscribe to store changes
