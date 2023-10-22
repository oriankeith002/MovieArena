import React from 'react';
import './Logo.css';

const Logo = ({src}) => {
  return (
    <img src={src} alt="site-log" className='site-logo' />
  )
}

export default Logo