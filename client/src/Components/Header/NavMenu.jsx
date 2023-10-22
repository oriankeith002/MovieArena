import React from 'react'
import './NavMenu.css';


const NavMenu = (props) => {
  return (
    <div className='nav-menu'>
        {props.children}
    </div>
  )
}

export default NavMenu