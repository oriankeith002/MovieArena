import React from 'react'
import './MoviePage.css'
import MovieThumbnail from './MovieThumbnail'

const MoviePage = () => {
  return (
    <div className='movie-page-container'>
      <div className='two-column-section'>

        <div className='selected-movie-info'>
          <MovieThumbnail />
          <div className='movie-info-and-thumbnail'>thumbnail</div>
        </div>
          
        <div className='four-other-movies'>
          <MovieThumbnail style={{width:105, height: 157}}/>
          <MovieThumbnail style={{width:105, height: 157}}/>
          <MovieThumbnail style={{width:105, height: 157}}/>
          <MovieThumbnail style={{width:105, height: 157}}/>
        </div>
      </div>
      <div className='plot-summary-section'>
        <div className='uploaded-by-and-date'></div>
      </div>
      <div className='comment-container'>
        <div className='comment-count'></div>
        <div className='comment-box'>
          <div className='main-comment-box'>
            <div>
              {/* this is a flex box kind of thing or grid  */}
              <div className='commenter-name-initials'></div>
              <div className='commenter-full-name'></div>
              <div className='comment-made-at-time'></div>
            </div>
            <div className='the-comment-itself'></div>
          </div>
          <div className='comment-like-button'></div>
        </div>
      </div>
    </div>
  )
}

export default MoviePage