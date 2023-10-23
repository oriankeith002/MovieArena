import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router';
import GenreCamp from './GenreCamp';
import ThumbnailUploader from './ThumbnailUploader';

const MovieForm = () => {

  const {id} = useParams();
  const [title, setTitle] = useState('');
  const [thumbnail, setThumbnail] = useState([]);
  const [releaseYear, setReleaseYear] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [rating, setRating] = useState('');
  const [plot, setPlot] = useState('');
  const [genres, setGenres] = useState([]);
  const [uploaderId, setUploaderId] = useState('');

  function inputHeader(text) {
    return (<h2 className='movie-form-input'>{text}</h2>)
  }

  function inputDescription(text) {
    return (
        <p className='movie-form-description'>{text}</p>
    )
  }

  function preInput(header,description) {
    return (
        <>
            {inputHeader(header)}
            {inputDescription(description)}
        </>
    )
  } 

  async function saveMovie(event) {
    event.preventDefault();

    // const movieData = {}
  }


  return (
    <div>
        <form onSubmit={saveMovie}>
            {preInput('Movie Title', 'Add your movie title here')}
            <input 
                type="text" 
                value={title} 
                onChange={ev => setTitle(ev.target.value)}
                placeholder="title for example: Need for speed" 
            />

            {preInput('Movie Image', 'Provide your thumbnail for movie')}
            <ThumbnailUploader onChange={setThumbnail}/>


            {preInput('Release Year', 'Enter movie release year')}
            <input 
                type="text" 
                value={releaseYear} 
                onChange={ev => setReleaseYear(ev.target.value)}
                placeholder="Like : 2023" 
            />

            {preInput('Date of Release','Enter the date of movie release')}
            <input 
                type="text" 
                value={releaseDate} 
                onChange={ev => setReleaseDate(ev.target.value)}
                placeholder="Enter year like : 2023-10-23" 
            />


            {preInput('Rating', 'Enter your rating for the movie')}
            <input 
                type="text" 
                value={rating} 
                onChange={ev => setRating(ev.target.value)}
                placeholder="Value between 1 to 10" 
            />

            {preInput('Plot', 'Enter the movie plot here')}
            <textarea value={plot} onChange={ev => setPlot(ev.target.value)} />

            {preInput('Genres', 'Select the genres of movie')}
            <div>
                <GenreCamp selected={genres} onChange={setGenres} />
            </div>


        </form>
    </div>
  )
}

export default MovieForm