import React, { useContext, useEffect, useState } from 'react'
import './MoviePage.css'
import CommentContainer from '../Comment/CommentContainer'
import prof from '../../../assets/images.jpg'
import MovieThumbnail from '../MovieThumbnail/MovieThumbnail'
import {useParams } from 'react-router-dom'
import axios from 'axios'
import Thumb from '../../../assets/test.jpg';
import StarRating from '../MovieStarRating/StarRating'
import { UserContext } from '../../../SupportUtilities/UserContext';
import { Link } from 'react-router-dom'




const MoviePage = () => {
  const {user} = useContext(UserContext);
  const {id} = useParams();
  const [myMovie, setMyMovie] = useState(null) 
  const [newComment, setNewComment] = useState('');
  const [myCommentData, setMyCommentData] = useState(null)



  // fetching intial data about movie
  useEffect(() => {
    try {
      if(!id){
        return;
      }

      axios.get(`/movies/${id}`).then(response => {
        setMyMovie(response.data)
      }) 

      axios.get(`/comments/${id}`).then(response => {
        setMyCommentData(response.data)
      })
    } catch(error) {
      console.log(error);
    }
  },[id,myCommentData])





  // it works but it is very slow .. 
  const handleCommentSubmission = async(event) => {
    event.preventDefault();

    try {
      await axios.post(`/comments/addcomment/${id}`,{newComment});
      setNewComment('');
     
    } catch(error) {
      console.error('Error adding comment : ', error);
    }
  }
  
 
  const genreList = myMovie?.genres?.map(genre => genre.name)



  function cleanDate(datedata) {

    let DateTest = new Date(datedata);
    let formattedDate = DateTest.toLocaleDateString('en', {
      day: 'numeric',
      month: 'short',
      year:'numeric'
    }) ;
    let formattedTime = DateTest.toLocaleTimeString('en',{
      hour:'numeric',
      minute:'numeric'
    }) 
    
    let dateEntry = formattedDate + ' at ' + formattedTime;

    return dateEntry
  }


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
                <span>Genre : </span> {genreList?.join(' / ')}
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
            <em>{''}</em>
          </span>
        </p>
      </section>
      <section className='comment-section'>
        <h2>{myCommentData?.length} Comments</h2>

        { user ? (
          <>
          { myCommentData?.length > 0 && myCommentData?.map((scomment) => (
            <CommentContainer 
              key={scomment.id}
              c_img={prof}
              commentor_name={scomment.commentor.name}
              the_comment={scomment.comment}
              comment_date={cleanDate(scomment.commentedAt)}
            /> ))} 
          <div className='comment-input-controls'>
            <form onSubmit={handleCommentSubmission} className='iform'>
              <textarea 
                className='comment-input'
                value={newComment}
                onChange={(ev) => setNewComment(ev.target.value)}
                placeholder="Add a comment here ..."
              />
              <button type='submit' className='comment-btn'>Add Comment </button>
            </form>
          </div>

          </>
        ) : (
          <Link to={'/login'} className='add-comment-btn'>Login to leave a comment</Link>
        )

        }
      </section>
    

      
    </div>
  )
}

export default MoviePage