import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment,reset} from './index';




function App() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter_red.counter); // Accessing the counter state from Redux store

  const handleIncrement = () => {
    dispatch(increment()); // Dispatch increment action
  };
  const Reset = () => {
    dispatch(reset()); // Dispatch decrement action
  };



  return (
    <div className="App">
      <h1>Hello Redux!!</h1>
      <button onClick={handleIncrement}>Increment by 1</button>
      <button onClick={Reset}>Reset</button>
      <p> state: {count}</p>
      

    </div>
  );
};


export default App;
