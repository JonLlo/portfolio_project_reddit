
// Define the initial state
const initialState = {
  searchTerm: '', // Initial search term is empty
};
const SET_SEARCH_TERM = 'SET_SEARCH_TERM';



export const searchTermReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_SEARCH_TERM:
        return {
          ...state,
          searchTerm: action.payload,
        };
      // other cases for different actions if needed
      default:
        return state;
    }
  };


export const setSearchTerm = (searchTerm) => ({
    type: SET_SEARCH_TERM,
    payload: searchTerm,
  });