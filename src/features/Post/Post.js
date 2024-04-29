import './Post.css';
import { API_ROOT } from '../../api/reddit';
import React, { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';

const Comment = ({ comment }) => {
  return (
    <Card className="comment">
      <div>
        <p>{comment.author}</p>
        <p>{comment.body}</p>
      </div>
    </Card>
  );
};

export const Post = ({ post }) => {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch(`https://www.reddit.com${post.permalink}.json`);
      const redditData = await response.json();
      setComments(redditData[1].data.children.map(comment => comment.data));
    };

    if (showComments) {
      fetchComments();
    }
  }, [showComments, post.permalink]);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <div>
      <Card className="card">
        <div>
          <h2>{post.title}</h2>
          <p>Author: {post.author}</p>
          <p>{post.body}</p>
          <p>Number of Comments: {post.num_comments}</p>
          <div>
              <img src={post.url} alt="" className="post-image" />
            </div>
          <button onClick={toggleComments}>
            {showComments ? 'Hide Comments' : 'Show Comments'}
          </button>
        </div>
      </Card>

      {showComments && (
        <div>
          <h3>Comments</h3>
          {comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      )}
    </div>
  );
};