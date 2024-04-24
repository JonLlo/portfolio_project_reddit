import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Post } from '../Post/Post';
import { getSubredditPosts } from '../../api/reddit'; // Import the API function
import './Home.css';
import { postsReducer } from '../../reducers/postsReducer';


export const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts); // Assuming you have a posts slice in your Redux store

  useEffect(() => {
    // Fetch subreddit posts when the component mounts
    const fetchPosts = async () => {
      try {
        const subreddit = '/r/reactjs'; // Example subreddit (replace with your desired subreddit)
        const subredditPosts = await getSubredditPosts(subreddit);
        // Dispatch an action to store the fetched posts in Redux
        dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: subredditPosts });
      } catch (error) {
        console.error('Error fetching subreddit posts:', error);
        // Dispatch an action to handle the error
        dispatch({ type: 'FETCH_POSTS_FAILURE', payload: error.message });
      }
    };

    fetchPosts(); // Call the fetchPosts function
  }, [dispatch]); // Include dispatch in the dependency array to prevent useEffect from running infinitely

  return (
    <div className="home">
      <h1>Reddit Posts</h1>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};