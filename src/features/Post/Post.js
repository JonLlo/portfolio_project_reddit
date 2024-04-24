import React, { useState } from 'react';
import './Post.css';
import Card from '../../components/Card/Card';

export const Post = () => {
  return (
    <Card className="card">
      {/* Your post content goes here */}
      <div>
        <h2>Post Title</h2>
        <p>This is the content of the post.</p>
      </div>
    </Card>
    
  );
};


