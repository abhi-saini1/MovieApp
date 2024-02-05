import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useGlobalContext } from "../../Context/Context";
import { Link } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

const Movies = () => {
  const { NowPlayingMovies, handleSeeMore,visible } = useGlobalContext();
  console.log(NowPlayingMovies);
  return (
    <div className="movies-section">
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
        {NowPlayingMovies &&
          NowPlayingMovies.map((nowplay, n) => (
            <SwiperSlide key={n}>
              <div className="nowplaying-banner">
                <Link to={`/moviesdetail/${nowplay.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${nowplay.poster_path}`}
                    alt=""
                  />
                  <div className="nowplaying-content">
                    <h4>{nowplay.title}</h4>
                    <h6>{nowplay.release_date}</h6>

                    <p>{nowplay.overview}</p>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      <Container className="section-wrapper">
        <Row>
          {NowPlayingMovies.slice(0,visible).map((play, n) => (
            <div className="col-lg-3 col-sm-6 aligin-items-center justify-content-center d-flex" key={n}>
             <Link to={`/moviesdetail/${play.id}`}>
             <div className="nowplaying-card">
                <img
                  src={`https://image.tmdb.org/t/p/original${play.poster_path}`}
                  className="img-fluid"
                  alt=""
                />
                <div className="nowplaying-overlay">
                    <h5>{play.title}</h5>
                    <div className="nowplaying-runtime">
                        {play.release_date}
                        <span className="rating">{play.vote_average}
                        <FaStar/>
                        </span>
                    </div>
                    <div className="nowplaying-description">
                        {play ? play.overview.slice(0,100)+"...": ""}
                    </div>
                </div>
              </div>
             </Link>
             
            </div>
            
          ))}
        </Row>
        <Row>
            <div className="col-lg-12 text-center">
            <button className="view-more" onClick={handleSeeMore}>View More</button>
            </div>
        </Row>
      </Container>
    </div>
  );
};

export default Movies;
