
// Initial state
const initialState = {
    counter: 500
  };
  
  // Reducer function
export function counterReducer(state = initialState, action) {
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


