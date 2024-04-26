import React from 'react';



export const Header = () => {
 

  return (
    <form onSubmit={console.log("blye")}>
    <input
      type="text"
      placeholder="Search posts..."
   
    />
    <button type="submit">Search</button>
  </form>
  );
};