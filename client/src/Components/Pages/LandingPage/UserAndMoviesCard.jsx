import React, { useEffect, useState } from 'react'
import Testimg from  '../../assets/test.jpg'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './UserAndMoviesCard.css';


const UserAndMoviesCard = (props) => {

    const [siteData, setSiteData] = useState([]);

    useEffect(() => {
        axios.get('/user/allusers').then(response => {
            setSiteData(response.data)
        })
    },[])

    console.log(siteData.data);

    // for (let i in siteData) {
    //     console.log(i)
    // }


    return (
        <div className='user-movie-info'>


            <div className='centerer'>
                {siteData?.data?.length > 0 && siteData?.data?.map(uploaderInfo => (
                    
                    <div className='OneUserMovieSection' key={uploaderInfo?.id}>

                        <h4>{uploaderInfo?.name} Movie Recommendations</h4>
                        <div className='movie-cards-grid'>
                        {uploaderInfo?.movies?.length > 0 &&  uploaderInfo.movies.map(movieInfo => (
                            <div className='xmovia' key={movieInfo.id}>
                                <Link to={'/movie/'+movieInfo.id} key={movieInfo?.id} className='thumb-container'>
                                    {movieInfo?.thumbnail && (
                                        <img src={'http://localhost:4000/uploads/'+movieInfo?.thumbnail} alt={movieInfo.title} />
                                    )}
                                </Link>
                                <Link to={'/movie/'+movieInfo.id} className="index-movie-title">
                                    {movieInfo.title}
                                </Link>
                            </div>
                          
                        ))}  
                        </div>
                    </div>
            
                ))}
            </div>
            
        </div>
    )
}

export default UserAndMoviesCard