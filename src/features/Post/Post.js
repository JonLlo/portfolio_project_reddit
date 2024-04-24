import React, { useState } from 'react';
import './Post.css';
import Card from '../../components/Card/Card';

export const Post = ({ post }) => {
  return (
    <Card className="card">
      <div>
        <h2>{post.title}</h2>
        <p>Author: {post.author}</p>
        <p>{post.data}</p>
        <p>Comments: {post.num_comments}</p>
      </div>
    </Card>
  );
};


