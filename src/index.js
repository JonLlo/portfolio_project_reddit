// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Initial state
const initialState = {
  counter: 500
};

// Reducer function
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + action.payload };
    case "decrement":
      return { counter: state.counter - action.payload };
    case "divide":
      return { counter: state.counter / action.payload };
    case "multiply":
        return { counter: state.counter * action.payload };
    case "squared":
        return { counter: state.counter ** action.payload };
    case "reset":
        return { counter: initialState.counter };
    default:
      return state;
  }
}

// Redux store
const store = createStore(counterReducer);

// Action creators
export const increment = () => ({
  type: "increment",
  payload: 1
});
export const divide = () => ({
  type: "divide",
  payload: 2
});

export const decrement = () => ({
  type: "decrement",
  payload: 1
});

export const multiply = () => ({
  type: "multiply",
  payload: 2
});

export const squared = () => ({
  type: "squared",
  payload: 2
});
export const reset = () => ({
  type: "reset",
});

// Render the app
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// Log initial state and subscribe to store changes
console.log(store.getState());
store.subscribe(() => console.log("Store is changed and state is", store.getState()));
