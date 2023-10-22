import React from 'react';
import './UserProfDetail.css';

const UserProfDetail = ({src}) => {
  return (
    <img src={src} alt='user-profile-img' className='nav-img' />
  )
}

export default UserProfDetail