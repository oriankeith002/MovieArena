import React, { useContext, useEffect } from 'react';
import './UserProfDetail.css';
import { UserContext }  from '../SupportUtilities/UserContext';
import {Link, useNavigate} from "react-router-dom";

const UserProfDetail = ({src}) => {
  const {user} = useContext(UserContext) 
  
  // const user = {name:'John Doe'}
  console.log(user);
  return (
    <>
    { user ? (
      
    <Link to={'/account/'} className='profile-area'>
      <img src={src} alt='user-profile-img' className='nav-img' />
      <div className='profile-name'>
        {user.name}
      </div>
    </Link> 
  

   ) : (<Link to={'/login'} className="login-btn">Login</Link>) } 
   </>
  
)}

export default UserProfDetail