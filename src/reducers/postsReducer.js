// postsReducer.js
const initialState = {
    posts: [],
    isLoading: false,
    error: null
  };
  
  export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_POSTS_REQUEST':
        return { ...state, isLoading: true, error: null };
      case 'FETCH_POSTS_SUCCESS':
        return { ...state, posts: action.payload, isLoading: false };
      case 'FETCH_POSTS_FAILURE':
        return { ...state, error: action.payload, isLoading: false };
      default:
        return state;
    }
  };


  
