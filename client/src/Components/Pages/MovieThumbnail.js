import React from 'react'
import Thumb from '../assets/test.jpg'


const MovieThumbnail = () => {
  return (
    <div className='thumb-container home-content'>
        <a href='ds' className='browser-movie-link'>
            <figure>
                <img className='img-responsive' src={Thumb} alt="movie-id" />
            </figure>
        </a>
    </div>
  )
}

export default MovieThumbnail