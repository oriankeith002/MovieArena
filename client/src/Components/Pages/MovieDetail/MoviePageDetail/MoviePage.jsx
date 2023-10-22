import React from 'react'
import './MoviePage.css'
import CommentContainer from '../Comment/CommentContainer'
import prof from '../../../assets/images.jpg'

import MovieThumbnail from '../MovieThumbnail/MovieThumbnail'

const MoviePage = () => {
  let DateTest = new Date();
  let formattedDate = DateTest.toLocaleDateString('en', {
    day: 'numeric',
    month: 'short',
    year:'numeric'
  }) ;
  let formattedTime = DateTest.toLocaleTimeString('en',{
    hour:'numeric',
    minute:'numeric'
  })

  
  console.log(DateTest)
  console.log('changing ...')
  console.log(formattedDate + ' at ' + formattedTime);

  const commentEntryTime = formattedDate + ' at ' + formattedTime
  const movieUploadEntryTime = formattedDate + ' at ' + formattedTime
  return (
    <div className='movie-page-container'>
      <section className='the-movie-section'>
        <div className='two-column-section'>
          <div className='selected-movie-info'>
            <div className='movie-graphic'>
              <MovieThumbnail />
            </div>
            <div className='movie-info'>
              <h1>The Childe</h1>
              <h2>2023</h2>
              <h2>Action/Drama/Thriller</h2>
            </div>
          </div>
            
          <div className='four-other-movies'>
            <MovieThumbnail style={{width:105, height: 157}}/>
            <MovieThumbnail style={{width:105, height: 157}}/>
            <MovieThumbnail style={{width:105, height: 157}}/>
            <MovieThumbnail style={{width:105, height: 157}}/>
          </div>
        </div>
        <div className="movie-bg"></div>
      </section>
    

      <section className='plot-summary-section'>
        <h2>Plot</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur 
          adipisicing elit. Deleniti enim necessitatibus 
          eaque itaque repellendus tempora molestias 
          doloremque reiciendis, nam ducimus officiis 
          esse voluptatum quod fugit earum saepe facilis 
          ipsum nobis repellat deserunt, suscipit eos ad eveniet. Veritatis autem cumque numquam corrupti, minima quisquam sed repudiandae officia aperiam quos amet repellat.
        </p>
        <p className='uploader'>
          <br />
          <em>Uploaded by: <a href='X'>FREEMAN</a> </em>
          <br />
          <span>
            <em>{movieUploadEntryTime}</em>
          </span>
        </p>
      </section>
      <section className='comment-section'>
        <h2>17 Comments</h2>
        <CommentContainer 
          c_img={prof}
          comment_date={commentEntryTime}
        />
        <CommentContainer 
          c_img={prof}
          comment_date={commentEntryTime}
        />
        <button className='add-comment-btn'> Login to leave a comment </button>
      </section>
    

      
    </div>
  )
}

export default MoviePage