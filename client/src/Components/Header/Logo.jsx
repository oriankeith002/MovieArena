import React from 'react';
import './Logo.css';
import { Link } from 'react-router-dom';

const Logo = ({src}) => {
  return (
    <Link Link to={'/'}>
      <img src={src} alt="site-log" className='site-logo' />
    </Link>
  )
}

export default Logo