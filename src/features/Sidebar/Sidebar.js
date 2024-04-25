import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Subreddits</h2>
        <button>Arsenal</button>
        <button>Man City</button>
    </div>
  );
};



/*
<li><Link to="/r/reactjs">/r/reactjs</Link></li>
<li><Link to="/r/javascript">/r/javascript</Link></li>

*/
