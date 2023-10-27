import React, { useContext } from 'react';
import './Landing.css';
import UserAndMoviesCard from './UserAndMoviesCard';
import { useNavigate } from 'react-router-dom';
import { UserContext }  from '../../SupportUtilities/UserContext';


const Landing = () => {
  // const navigate = useNavigate()
  // const {user} = useContext(UserContext) 

  // //refresh
  // const refreshPage = () => {
  //   navigate(0)
  // }

  // if (user) {
  //   refreshPage()
  // }
  
  return (
    <main className='landing-page-container'>
      <UserAndMoviesCard />
    </main>
  )
}

export default Landing