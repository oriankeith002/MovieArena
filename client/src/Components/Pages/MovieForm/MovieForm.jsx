import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {useParams} from 'react-router';
// import { UserContext } from '../../SupportUtilities/UserContext';
import GenreCamp from './GenreCamp';
import ThumbnailUploader from './ThumbnailUploader';
import './MovieForm.css';

const MovieForm = () => {

  // const {user} = useContext(UserContext) // getting user-profile detail
  let user = {
    name:'John Doe',
    id:'c299320200'
  }
  const {id} = useParams(); // getting id from url
  const [title, setTitle] = useState('');
  const [thumbnail, setThumbnail] = useState([]);
  const [releaseYear, setReleaseYear] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [rating, setRating] = useState('');
  const [plot, setPlot] = useState('');
  const [genres, setGenres] = useState([]);
  const [uploaderId, setUploaderId] = useState(''); 


  useEffect(() => {
    if(!id){
      return;
    } 
    // retuning data from server to populate form when editing
    axios.get('/movies/'+id).then(response => {
      const {data} = response;
      setTitle(data.title);
      setThumbnail(data.thumbnail);
      setRating(data.rating)
      setGenres(data.genres)
      setReleaseDate(data.releaseDate)
      setReleaseYear(data.releaseYear)
      setPlot(data.plot)
    })
  },[id])



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
        <div className='form-info-container'>
            {inputHeader(header)}
            {inputDescription(description)}
        </div>
    )
  } 

  async function saveMovie(event) {
    event.preventDefault();
    setUploaderId(user.id); // updating uploaderId 
    const movieData = {
      title,
      releaseDate,
      releaseYear,
      thumbnail,
      rating,
      plot,
      genres,
      uploaderId
    } 

    console.log(id);
    console.log(movieData)
    // if (id) {
    //   // this implies it is an update
    //   await axios.put(`/movie/${id}`)
    //   // redirect after updating movie to the movies list in user movies
    // } else {
    //   // this is a new movie 
    //   await axios.post('/movie',movieData) 
    //   // redirect here after entering movie data
    // }
  }


  return (
    <div className='movie-form-container'>
        <form onSubmit={saveMovie} className='movie-form' >
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
            <div className='gcontainer'>
                <GenreCamp selected={genres} onChange={setGenres} />
            </div>
          
            <button className='movie-form-sub-btn'>
              SUBMIT MOVIE
            </button>

        </form>
    </div>
  )
}

export default MovieForm