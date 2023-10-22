import React from 'react'
import './CommentContainer.css'

const CommentContainer = (props) => {
  const {c_img, comment_date} = props;
  return (
    <div className="comment-box">
        <img src={c_img} alt='commentor_photo' className='commentor-img' />
        <div className='comment-info'>
            <div className='horizontal-header'>
              <h3>Jameson Rwakaka</h3> 
              <span span>{comment_date}</span>
            </div>
            <p>
                Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. 
                Ad, quo.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dicta. Tenetur ipsa modi labore inventore? Labore asperiores facere dolore minima voluptatibus atque perspiciatis et! Pariatur praesentium totam exercitationem doloremque ducimus.
            </p>
        </div>
    </div>
  )
}

export default CommentContainer;