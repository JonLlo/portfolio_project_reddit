import React, { useState } from 'react';
import './Post.css';
import Card from '../../components/Card/Card';
import { API_ROOT } from '../../api/reddit';






export const Post = ({ post }) => {






  return (
    <Card className="card">
      <div>
        <h2>{post.title}</h2>
        <p>Author: {post.author}</p>
        <p>{post.data}</p>
        <p>Number of Comments: {post.num_comments}</p>
        <button onClick={console.log}>Comments</button>
      </div>
    </Card>
  );
};


