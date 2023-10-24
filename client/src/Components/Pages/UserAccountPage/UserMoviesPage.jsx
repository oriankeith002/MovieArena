import axios from 'axios';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import AccountPageNavigation from './AccountPageNavigation'
import Tstimg from '../../assets/test.jpg'
import './UserMoviesPage.css';

const UserMoviesPage = () => { 

  const [userMovies, setUserMovies] = useState([])

  useEffect(() => {
    axios.get('/user/mymovies').then(({data}) => {
      setUserMovies(data);
    })
  },[])

  console.log('--- Returning movies for logged in user ----')
  console.log(userMovies)
  console.log('--------------------------------------------')

  return (
    <>
      <AccountPageNavigation />
      <div className='umovies-page-wrapper'>
      <div className=''>
        <Link className="movie-adder" to={'/movie/new'}>
          Add a new movie
        </Link> 

        <div className='user-movies-list'>
          {userMovies?.movies?.length > 0 && userMovies.movies.map( uMovie => (
            <Link to={'/movie/'+uMovie.id} className='my-movie-container' key={uMovie.id}>
              <div className='movie-thumb-container'>
                {uMovie?.thumbnail && (
                  <img className='movie-cover' src={'http://localhost:4000/uploads/'+uMovie?.thumbnail} alt="movie-cover" />
                )}

              </div>
              <div className='movie-summary-container'>
                <h2 className='movie-title'>{uMovie?.title}</h2>
                <p>{uMovie?.plot}</p>
                <div className='editanddelete'>
                  <Link to={'/account/movie/:id'} className='edit-btn'>Edit  </Link>
                  <button className='delete-btn'>Delete </button>
                </div>
              </div>
             
            </Link>
          ))} 
        </div>
      </div>
    </div>
    </>
   
  )
}

export default UserMoviesPage