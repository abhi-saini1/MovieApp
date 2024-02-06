import React from 'react'
import { useGlobalContext } from '../../Context/Context'
import { Container,Row } from 'react-bootstrap';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Search from '../../Components/Search';

const Discover = () => {
    const {tvseriesmovies,upcomingVisible,upcomingHandle} = useGlobalContext()
    console.log(tvseriesmovies);
  return (
    <div className='discover-section'>
        <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {tvseriesmovies &&
          tvseriesmovies.map((series, s) => (
            <SwiperSlide key={s}>
              <div className="discover-banner">
                <Link to={`/moviesdetail/${series.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${series.backdrop_path}`}
                    alt=""
                  />
                  <div className="discover-content">
                    <h4>{series.title}</h4>
                    <h6>{series.release_date}</h6>

                    <p>{series.overview}</p>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
            

      <Container className="section-wrapper">
        <Row>
          <Search/>
        </Row>
        <Row>
          {tvseriesmovies.slice(0,upcomingVisible).map((tv, n) => (
            <div className="col-lg-3 col-sm-6 aligin-items-center justify-content-center d-flex" key={n}>
             <Link to={`/moviesdetail/${tv.id}`}>
             <div className="discover-card">
                <img
                  src={`https://image.tmdb.org/t/p/original${tv.poster_path}`}
                  className="img-fluid"
                  alt=""
                />
                <div className="discover-overlay">
                    <h5>{tv.title}</h5>
                    <div className="discover-runtime">
                        {tv.release_date}
                        <span className="rating">{tv.vote_average}
                        <FaStar/>
                        </span>
                    </div>
                    <div className="discover-description">
                        {tv ? tv.overview.slice(0,100)+"...": ""}
                    </div>
                </div>
              </div>
             </Link>
             
            </div>
            
          ))}
        </Row>
        <Row>
            <div className="col-lg-12 text-center">
            <button className="view-more" onClick={upcomingHandle}>View More</button>
            </div>
        </Row>
      </Container>
    </div>
  )
}

export default Discover