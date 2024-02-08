import React, { useState } from 'react'
import { useGlobalContext } from '../Context/Context'
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

const MovieCard = () => {
    const{searchMovies} = useGlobalContext()
    // console.log(searchMovies)

    
  return (
    <>
        {searchMovies ? searchMovies.map((search) => (
            <div className="col-lg-3 col-sm-6 aligin-items-center justify-content-center d-flex mt-5" key={search.id}>
             <Link to={`/moviesdetail/${search.id}`}>
             <div className="movie-card">
                <img
                  src={`https://image.tmdb.org/t/p/original${search.poster_path}`}
                  className="img-fluid"
                  alt=""
                />
                <div className="movie-overlay">
                    <h5>{search.title}</h5>
                    <div className="movie-runtime">
                        {search.release_date}
                        <span className="rating">{search.vote_average}
                        <FaStar/>
                        </span>
                    </div>
                    <div className="movie-description">
                        {search ? search.overview.slice(0,100)+"...": ""}
                    </div>
                </div>
              </div>
             </Link>
             
            </div>
            
          ))
            :
            ""
        }
    </>
  )
}

export default MovieCard