import React from 'react'
import Testimg from  '../../assets/test.jpg'
import './UserAndMoviesCard.css';

const UserAndMoviesCard = (props) => {
  return (
    <div className='user-movie-info'>
        <div className='centerer'>
        <h4>Keith Recommendations </h4>

        <div className='movie-cards-grid'>
            
            <div className='thumb-container'>
                <img src={Testimg} alt='movie-thumb'/>
            </div>
             
            <div className='thumb-container'>
                <img src={Testimg} alt='movie-thumb'/>
            </div>
 
            <div className='thumb-container'>
                <img src={Testimg} alt='movie-thumb'/>
            </div>
 
            <div className='thumb-container'>
                <img src={Testimg} alt='movie-thumb'/>
            </div>
 
            <div className='thumb-container'>
                <img src={Testimg} alt='movie-thumb'/>
            </div>
 
            <div className='thumb-container'>
                <img src={Testimg} alt='movie-thumb'/>
            </div>


        </div>
        </div>
        
    </div>
  )
}

export default UserAndMoviesCard