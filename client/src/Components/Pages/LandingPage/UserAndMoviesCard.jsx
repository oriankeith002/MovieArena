import React, { useEffect, useState } from 'react'
import Testimg from  '../../assets/test.jpg'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './UserAndMoviesCard.css';


const UserAndMoviesCard = (props) => {

    const [siteData, setSiteData] = useState([]);

    useEffect(() => {
        axios.get('/user/allusers').then(response => {
            setSiteData(response.data)
        })
    },[])

    console.log(siteData);




  return (
    <div className='user-movie-info'>


        <div className='centerer'>
        <h4>Keith Recommendations </h4>

        <div className='movie-cards-grid'>
            
            <Link className='thumb-container'>
                <img src={Testimg} alt='movie-thumb'/>
            </Link>
             
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