import React, {useState} from 'react';
import axios from 'axios';

const ThumbnailUploader = ({onChange}) => {

  const [photoLink, setPhotoLink] = useState('');

  async function addPhotoByLink(event) {
    event.preventDefault();
    const {data:filename} = await axios.post('/upload-by-link',{link:photoLink})
    onChange( prev => {
        return [...prev, filename];
    });
    setPhotoLink('');
  }

  return (
    <div className="flex gap-2">
      <input 
        type="text" 
        value={photoLink} 
        onChange={ev => setPhotoLink(ev.target.value)} 
        placeholder={'Add using a link ...'} 
      />
      <button onClick={addPhotoByLink} className="upload-btn">Add&nbsp;photo</button>
    </div>

  )
}

export default ThumbnailUploader