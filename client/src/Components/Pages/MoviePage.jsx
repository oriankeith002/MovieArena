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
        <h2>Plot</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur 
          adipisicing elit. Deleniti enim necessitatibus 
          eaque itaque repellendus tempora molestias 
          doloremque reiciendis, nam ducimus officiis 
          esse voluptatum quod fugit earum saepe facilis 
          ipsum nobis repellat deserunt, suscipit eos ad eveniet. Veritatis autem cumque numquam corrupti, minima quisquam sed repudiandae officia aperiam quos amet repellat.
        </p>

        <div className='uploaded-by-and-date'>
          <div><em>Uploaded By </em> : Orian keith <br/></div>
          <div><em>Date </em> : 15th October 2023</div>
        </div>
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