import axios from 'axios';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import AccountPageNavigation from './AccountPageNavigation'
import Tstimg from '../../assets/test.jpg'

const UserMoviesPage = () => { 

  // const [userMovies, setUserMovies] = useState([])

  // useEffect(() => {
  //   axios.get('/user-movies').then(({data}) => {
  //     setUserMovies(data);
  //   })
  // },[])

  return (
    <div>
      <AccountPageNavigation />
      <div>
        <Link className="" to={'/movie/new'}>
          Add a new movie
        </Link> 

        <div className=''>
          <div className='movie-thumb-container'>
            <img className='movie-cover' src={Tstimg} alt="movie-cover" />
          </div>
          <div className='grows-and-shrinks'>
            <h2 className='movie-title'>My Movie Title</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Praesentium, ut libero perferendis in cumque amet, 
              ea nesciunt, vitae quaerat sunt quod illo maiores asperiores. 
              Ullam consequatur qui, accusamus sit omnis dolore aliquam 
              officia magni reiciendis odit ut fuga saepe molestias amet, 
              iste, quaerat rem provident dolorum voluptatibus. 
              Illo, blanditiis nesciunt.
            </p>
          </div>

          <div>
              Button Here for Delete and Edit
          </div>
        </div>

        {/* <div className='user-movies-list'>
          {userMovies.length > 0 && userMovies.map( uMovie => (
            <Link to={'/movie/:id'} className='' key={uMovie.id}>
              <div className='movie-thumb-container'>
                {uMovie.thumbnail.length > 0 && (
                  <img className='movie-cover' src={'http://localhost:4000/uploads/'+uMovie.thumbnail[0]} alt="movie-cover" />
                )}

              </div>
              <div className='grows-and-shrinks'>
                <h2 className='movie-title'>{uMovie.title}</h2>
                <p>{uMovie.plot}</p>
              </div>
              <div>
                  Button Here for Delete and Edit
              </div>
            </Link>
          ))}
        </div> */}
      </div>
    </div>
  )
}

export default UserMoviesPage