import React, { useContext } from 'react';
import './UserProfDetail.css';
import { UserContext }  from '../SupportUtilities/UserContext';
import {Link} from "react-router-dom";

const UserProfDetail = ({src}) => {
  const {user} = useContext(UserContext)
  return (
    <Link to={ user?'/useraccount':'/login'}>
      <img src={src} alt='user-profile-img' className='nav-img' />
      {!!user && (
        <div>
          {user.name}
        </div>
      )}
    </Link>
  )
}

export default UserProfDetail