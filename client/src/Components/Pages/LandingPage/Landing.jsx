import React from 'react';
import './Landing.css';
import UserAndMoviesCard from './UserAndMoviesCard';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate()
  //refresh
  navigate(0)
  return (
    <main className='landing-page-container'>
      <UserAndMoviesCard />
    </main>
  )
}

export default Landing