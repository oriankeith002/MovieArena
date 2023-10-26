import React, {useState} from 'react';
import axios from 'axios';
import './ThumbnailUploader.css';

const ThumbnailUploader = ({addedThumbnails,onChange}) => {

  const [photoLink, setPhotoLink] = useState('');

  async function addPhotoByLink(event) {
    event.preventDefault();
    const {data:filename} = await axios.post('/movies/upload-by-link',{link:photoLink})
    onChange( prev => {
        return [...prev, filename];
    });
    setPhotoLink('');
  }

  return (
    <div className='about-thumbnails'>
      <div className="uploader-photo-link">
        <input 
          className='upd-input'
          type="text" 
          value={photoLink} 
          onChange={ev => setPhotoLink(ev.target.value)} 
          placeholder={'Add using a link ...'} 
        />
        <button onClick={addPhotoByLink} className="upload-btn">Add&nbsp;photo</button>
      </div>

      <div className='uploaded-thumbs-container'>
        {addedThumbnails?.length > 0 && addedThumbnails?.map(link => (
          <div className='thumb-grid' key={link}>
            <img className='' src={'http://localhost:4000/uploads/'+link} alt='' />
          </div>
        ))}
      </div>

    </div>
  )
}

export default ThumbnailUploader