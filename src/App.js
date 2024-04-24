import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, divide, multiply, squared, reset} from './index';




function App() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter_red.counter); // Accessing the counter state from Redux store

  const handleIncrement = () => {
    dispatch(increment()); // Dispatch increment action
  };

  const handleDecrement = () => {
    dispatch(decrement()); // Dispatch decrement action
  };
  const handleDivide = () => {
    dispatch(divide()); // Dispatch decrement action
  };
  const handleMultiply = () => {
    dispatch(multiply()); // Dispatch decrement action
  };
  const handleSquared = () => {
    dispatch(squared()); // Dispatch decrement action
  };
  const Reset = () => {
    dispatch(reset()); // Dispatch decrement action
  };



  return (
    <div className="App">
      <h1>Hello Redux</h1>
      <button onClick={handleIncrement}>Increment by 1</button>
      <button onClick={handleDecrement}>Decrement by 1</button>
      <button onClick={handleDivide}>Divide by 2</button>
      <br></br>
      <button onClick={handleMultiply}>Multiply by 2</button>
      <button onClick={handleSquared}>Square</button>
      <br></br>
      <button onClick={Reset}>Reset</button>
      <p> state: {count}</p>
      

    </div>
  );
};


export default App;
