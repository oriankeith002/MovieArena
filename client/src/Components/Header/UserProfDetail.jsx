import React, { useContext } from 'react';
import './UserProfDetail.css';
import { UserContext }  from '../SupportUtilities/UserContext';
import {Link} from "react-router-dom";

const UserProfDetail = ({src}) => {
  const {user} = useContext(UserContext)
  // const user = {name:'John Doe'}
  console.log(user);
  return (
    <Link to={ user?'/account/':'/login'} className='profile-area'>
      <img src={src} alt='user-profile-img' className='nav-img' />
      {!!user && (
        <div className='profile-name'>
          {user.name}
        </div>
      )}
    </Link>
  )
}

export default UserProfDetail