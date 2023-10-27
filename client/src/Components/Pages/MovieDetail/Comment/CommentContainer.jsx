import React from 'react'
import './CommentContainer.css'


const CommentContainer = (props) => {
  const {c_img, commentor_name, the_comment, comment_date} = props;
  return (
    <div className="comment-box">
        <img src={c_img} alt='commentor_photo' className='commentor-img' />
        <div className='comment-info'>
            <div className='horizontal-header'>
              <h3>{commentor_name}</h3> 
              <span span>{comment_date}</span>
            </div>
            <p>
               {the_comment}
            </p>
        </div>
    </div>
  )
}

export default CommentContainer;