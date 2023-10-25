import React, { useEffect, useState } from 'react'
import './MoviePage.css'
import CommentContainer from '../Comment/CommentContainer'
import prof from '../../../assets/images.jpg'
import MovieThumbnail from '../MovieThumbnail/MovieThumbnail'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Thumb from '../../../assets/test.jpg';
import StarRating from '../MovieStarRating/StarRating'


const MoviePage = () => {


  

  const {id} = useParams();
  const [myMovie, setMyMovie] = useState(null)

  useEffect(() => {
    if(!id){
      return;
    }
    axios.get(`/movies/${id}`).then(response => {
      setMyMovie(response.data)
    })

  },[id])


  console.log(myMovie)
  const genreList = myMovie?.genres?.map(genre => genre.name)
  console.log(genreList) 

  // const starRatingOnFive = Math.ceil(myMovie.rating/2);
  // const remainingStars = 5 - starRatingOnFive;

  // console.log(starRatingOnFive)
  // console.log(remainingStars)


  // const yellowStar = '⭐️'.repeat(starRatingOnFive);
  // const uncoloredStar = '☆'.repeat(remainingStars);
  // const starRating = yellowStar + uncoloredStar;
  // console.log(starRating);



  let DateTest = new Date(myMovie?.releaseDate);
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
              {myMovie?.thumbnail && (
                <MovieThumbnail src={'http://localhost:4000/uploads/'+myMovie?.thumbnail} />
              )}
              {!myMovie?.thumbnail && (
                <MovieThumbnail src={Thumb} />
              ) }
            </div>
            <div className='movie-info'>
              <h1 className='year-of-movie'>{myMovie?.title}</h1>
              <h2>
                <span>Year : </span> {myMovie?.releaseYear}
              </h2>
              <h2 className='kinds-of-genres'>
                <span>Genre : </span> {genreList?.join(' / ') || 'No genre' }
              </h2>
              <h2 className="movie-ratings">
                <span>Rating : </span> {myMovie?.rating} / 10
                <div>Stars : <StarRating rating={myMovie?.rating} /></div>
              </h2>
            </div>
          </div>
        </div>
      </section>
    

      <section className='plot-summary-section'>
        <h2>Plot</h2>
        <p>
          {myMovie?.plot}
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