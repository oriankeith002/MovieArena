import React from 'react'
import './MovieThumbnail.css'

const MovieThumbnail = (props) => { 
  const {style, src} = props;
  return (
    <div className='thumb-containerx home-contentx'>
        <div className='browser-movie-link'>
            <figure>
                <img 
                  className='img-responsive' 
                  src={src} 
                  alt="movie-id" 
                  style= {style?{...style}:{width:210, height:315}}
                />
            </figure>
        </div>
    </div>
  )
}

export default MovieThumbnail