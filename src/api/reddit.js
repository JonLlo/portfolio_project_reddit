export const API_ROOT = 'https://www.reddit.com';

export const getSubredditPosts = async (subreddit) => {
    const response = await fetch(`${API_ROOT}${subreddit}.json`);
    const json = await response.json();
  
    return json.data.children.map((post) => post.data);
  };



  /*export const getSubredditComments = async (subreddit) => {
    const response = await fetch(`${API_ROOT}${subreddit}.json`);
    const json = await response.json();
    
    // Map over the posts and prepend the Reddit domain to each permalink
    const permalinks = json.data.children.map(post => `https://www.reddit.com${post.data.permalink}`);
    
    return permalinks;
  };
  */
 


