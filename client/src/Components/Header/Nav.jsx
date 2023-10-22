import React from 'react';
import './Nav.css';


const Nav = (props) => {
  return (
    <nav className='nav-bar'>{props.children}</nav>
  )
}

export default Nav