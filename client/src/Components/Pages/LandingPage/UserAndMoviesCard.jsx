import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './UserAndMoviesCard.css';
import StarRating from '../MovieDetail/MovieStarRating/StarRating';
// import '../AllMoviesPage/AllMoviesPage.css';

const UserAndMoviesCard = (props) => {

    const [siteData, setSiteData] = useState([]);

    useEffect(() => {
        axios.get('/user/allusers').then(response => {
            setSiteData(response.data)
        })
    },[])

    console.log(siteData.data);


    return (
        <div className='user-movie-info'>


            <div className='centerer'>
                {siteData?.data?.length > 0 && siteData?.data?.map(uploaderInfo => (
                    
                    <div className='OneUserMovieSection' key={uploaderInfo?.id}>

                        <h4>{uploaderInfo?.name} Movie Recommendations</h4>
                        <div className='movie-cards-grid'>
                        {uploaderInfo?.movies?.length > 0 &&  uploaderInfo.movies.map(movieInfo => (
                            <Link to={'/movie/'+movieInfo?.id} className='amovies-container' key={movieInfo?.id}>
                                <div className='athumb-cont'>
                                    {movieInfo?.thumbnail && (
                                        <img src={'http://localhost:4000/uploads/'+movieInfo?.thumbnail} alt={movieInfo?.title} />
                                    )}
                                </div>
                                <div>{movieInfo?.title}</div>
                                <StarRating rating={movieInfo?.rating}/>
                            </Link>


                        ))}
                        </div>
                    </div>
            
                ))}
            </div>
            
        </div>
    )
}

export default UserAndMoviesCard