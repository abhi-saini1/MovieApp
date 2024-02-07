import React from 'react'
import { useGlobalContext } from '../../Context/Context'
import { Container,Row } from 'react-bootstrap';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import {  Navigation, Autoplay } from "swiper/modules";


const Discover = () => {
    // const {tvseriesmovies,upcomingVisible,upcomingHandle} = useGlobalContext()
    const {discoverMovies,discoverVisible,discoverHandle} = useGlobalContext()
    console.log(discoverMovies);
  return (
    <div className='discover-section'>
        <Swiper
       
        navigation={true}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: true,
        }}
        modules={[ Navigation, Autoplay]}
        className="mySwiper"
      >
        {discoverMovies &&
          discoverMovies.map((discover, d) => (
            <SwiperSlide key={d.id}>
              <div className="discover-banner">
                <Link to={`/moviesdetail/${discover.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${discover.backdrop_path}`}
                    alt=""
                  />
                  <div className="discover-content">
                    <h4>{discover.title}</h4>
                    <h6>{discover.release_date}</h6>

                    <p>{discover.overview}</p>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
            

      <Container className="section-wrapper">
        
        <Row>
          {discoverMovies.slice(0,discoverVisible).map((dmovie) => (
            <div className="col-lg-3 col-sm-6 aligin-items-center justify-content-center d-flex" key={dmovie.id}>
             <Link to={`/moviesdetail/${dmovie.id}`}>
             <div className="discover-card">
                <img
                  src={`https://image.tmdb.org/t/p/original${dmovie.poster_path}`}
                  className="img-fluid"
                  alt=""
                />
                <div className="discover-overlay">
                    <h5>{dmovie.title}</h5>
                    <div className="discover-runtime">
                        {dmovie.release_date}
                        <span className="rating">{dmovie.vote_average}
                        <FaStar/>
                        </span>
                    </div>
                    <div className="discover-description">
                        {dmovie ? dmovie.overview.slice(0,100)+"...": ""}
                    </div>
                </div>
              </div>
             </Link>
             
            </div>
            
          ))}
        </Row>
        <Row>
            <div className="col-lg-12 text-center">
            <button className="view-more" onClick={discoverHandle}>View More</button>
            </div>
        </Row>
      </Container>
    </div>
  )
}

export default Discover