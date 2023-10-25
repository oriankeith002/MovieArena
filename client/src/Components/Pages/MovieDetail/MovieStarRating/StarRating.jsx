import React from 'react'
import './StarRating.css'

const StarRating = ({rating}) => {

  const starRatingOnFive = Math.ceil(rating/2);
  const remainingStarsOnFive = 5 - starRatingOnFive;

  
  const yellowStar = '⭐️';
  const uncoloredStar = '☆';

  const stars = []
  for (let i = 0; i < starRatingOnFive; i++) {
    stars.push(<span key={i} style={{ color:'yellow'}}>
        {yellowStar}
    </span>)
  }

  for (let i=0; i < remainingStarsOnFive; i++) {
    stars.push(<span key={i+starRatingOnFive}>
      {uncoloredStar}
    </span>)
  }
  return (
    <div className='starbox'><span>Stars : </span>{stars}</div>
  )
}

export default StarRating