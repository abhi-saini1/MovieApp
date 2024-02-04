import React from "react";
import { useGlobalContext } from "../../Context/Context";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pageination from "../../Components/Pageination";
import { FaStar } from "react-icons/fa";
const title = "Top Rated Movies";
const Rated = () => {
  const { Ratedmovie } = useGlobalContext();
  console.log(Ratedmovie);
  return (
    <>
      <div className="Rated-section section-wrapper">
        <Container>
          <Row>
            <div className="col-12">
              <h3>{title}</h3>
              <hr className="ball" />
            </div>
          </Row>
          <Row>
            {Ratedmovie.map((Rated, i) => (
              <div
                className="col-lg-3 col-sm-6 aligin-items-center justify-content-center d-flex"
                key={i}
              >
                <div className="Rated-card">
                  <img
                    src={`https://image.tmdb.org/t/p/original${Rated.poster_path}`}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="Rated-overlay">
                    <h5>{Rated.title}</h5>
                    <div className="Rated-runtime">
                      {Rated.release_date}
                      <span className="rating">
                        {Rated.vote_average}
                        <FaStar />
                      </span>
                    </div>
                    <div className="Rated-description">
                      {Rated ? Rated.overview.slice(0, 100) + "..." : ""}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Row>
        </Container>
      </div>
      <Pageination />
    </>
  );
};

export default Rated;
