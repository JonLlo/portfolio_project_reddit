// commentsReducer.js
const initialState = {
    comments: [],
    isLoading: false,
    error: null
  };
  
  export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_COMMENTS_REQUEST':
        return { ...state, isLoading: true, error: null };
      case 'FETCH_COMMENTS_SUCCESS':
        return { ...state, comments: action.payload, isLoading: false };
      case 'FETCH_COMMENTS_FAILURE':
        return { ...state, error: action.payload, isLoading: false };
      default:
        return state;
    }
  };
  