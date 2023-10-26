import axios from 'axios';
import { Link, Navigate, useParams } from "react-router-dom";
import React, { useContext, useEffect, useState } from 'react'
import AccountPageNavigation from './AccountPageNavigation'
import './UserMoviesPage.css';
import { UserContext } from '../../SupportUtilities/UserContext';





const UserMoviesPage = () => { 
  const [userMovies, setUserMovies] = useState([])

  const {user} = useContext(UserContext) // getting user-profile detail

  useEffect(() => {
    axios.get('/user/mymovies').then(({data}) => {
      setUserMovies(data);
    })
  },[])


  const handleRefresh = () => {
    window.location.reload()
  }

  const deleteHandler = async(movieId) => {
		await axios.delete(`/movies/${movieId}`);
    handleRefresh()
	}

 
  if(user){
    <Navigate to={'/login'} />
  }

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
            <div className='um-martial' key={uMovie.id}>
              <Link to={'/movie/'+uMovie.id} className='my-movie-container' >
                <div className='movie-thumb-container'>
                  {uMovie?.thumbnail && (
                    <img className='movie-cover' src={'http://localhost:4000/uploads/'+uMovie?.thumbnail} alt="movie-cover" />
                  )}
                </div>
                <div className='movie-summary-container'>
                  <h2 className='movie-title'>{uMovie?.title}</h2>
                  <p>{uMovie?.plot}</p>      
                </div>              
              </Link> 
              <div className='editanddelete'>
                <Link to={'/account/movie/'+uMovie.id} className='edit-btn'>Edit  </Link>
                <button onClick={() => deleteHandler(uMovie.id)} className='delete-btn'>Delete </button>
              </div>
            </div>
          ))} 
        </div>
      </div>
    </div>
    </>
   
  )
}

export default UserMoviesPage