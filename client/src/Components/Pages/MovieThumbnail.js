import React from 'react'
import Thumb from '../assets/test.jpg'
import './MovieThumbnail.css'

const MovieThumbnail = (props) => { 
  const {style} = props;
  return (
    <div className='thumb-container home-content'>
        <a href='ds' className='browser-movie-link'>
            <figure>
                <img 
                  className='img-responsive' 
                  src={Thumb} 
                  alt="movie-id" 
                  style= {style?{...style}:{width:210, height:315}}
                />
            </figure>
        </a>
    </div>
  )
}

export default MovieThumbnail