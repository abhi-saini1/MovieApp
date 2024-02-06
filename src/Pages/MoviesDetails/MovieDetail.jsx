import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Container,Row } from 'react-bootstrap';
import { MdFormatListBulletedAdd } from "react-icons/md";

const MovieDetail = () => {
    const [currentMovieDetail,setCurrentMovieDetail] = useState([]);
    const [wishlist,setWishList] = useState([])
    const {id} = useParams();
    console.log(id);

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${
            import.meta.env.VITE_API_KEY}`)
            .then((res)=> res.json())
            .then((data=> setCurrentMovieDetail(data)))
          
    },[])

    return (
    <div className='movie-detail'>
            <Container>
                <Row>
                    <div className='col-lg-12'>
                        <div className='movie-detail-banner'>
                         <img src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} className='img-fluid' alt='img-detail'/>
                        </div>

                        <div className='movie-right-details'>
                                <div className='movie-poster'>
                                    <img src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} alt='img-detail'/>
                                </div>
                                <div className='movie-right-content'>
                                        <div className='movie-content'>
                                            <div className='movie_name'>{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                                            <div className='movie_tagline'>{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                                            <div className='movie_rating'>
                                                {currentMovieDetail ? currentMovieDetail.vote_average : ""}
                                                <span>{currentMovieDetail ? "(" + currentMovieDetail.vote_count +") votes" : ""}</span>
                                                <Link><MdFormatListBulletedAdd/></Link>
                                            </div>
                                            <div className='movie_genres'>
                                                {currentMovieDetail && currentMovieDetail.genres 
                                                    ?
                                                    currentMovieDetail.genres.map((genre)=>(
                                                        <><span className='movie_genre'>{genre.name}</span></>

                                                    ))
                                                    :
                                                    ""
                                                }
                                            </div>
                                            <div className='movie_description'>
                                                <div className='synopsis'>Synopsis</div>
                                                <div className='synopsis-text'>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                                            
                                            </div>
                                        </div>
                                </div>
                        </div>
                    </div>
                </Row>
                
                <Row>

                </Row>
            </Container>
    </div>
  )
}

export default MovieDetail