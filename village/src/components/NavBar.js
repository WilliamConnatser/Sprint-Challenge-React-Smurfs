import React from 'react';
import {NavLink} from 'react-router-dom';

export default function NavBar() {
    const activeStyle = {
        color: 'green',
        fontWeight: 'bold'
    }
  return (
    <div>
      <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
      <NavLink to="/add-smurf" activeStyle={activeStyle}>Add Smurf</NavLink>
    </div>
  )
}