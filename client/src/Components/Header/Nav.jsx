import React from 'react';
import './Nav.css';


const Nav = (props) => {
  return (
    <nav>{props.children}</nav>
  )
}

export default Nav