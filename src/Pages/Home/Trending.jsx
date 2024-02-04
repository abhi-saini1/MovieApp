import React from 'react'
import { useGlobalContext } from '../../Context/Context'
import { Container, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
const title = 'Trending Movies'

const Trending = () => {
    const { Trendingmovie } = useGlobalContext()
    // console.log(Trendingmovie)
    return (
        <div className='Trending-section section-wrapper'>
            <Container>
                <Row>
                    <div className='col-12'>
                        <h3>{title}</h3>
                        <hr className='ball'/>
                    </div>
                </Row>
                <Row className='mt-3'>
                    <Swiper
                       
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                          }}
                        breakpoints={{
                            640: {
                              slidesPerView: 2,
                              spaceBetween: 20,
                            },
                            768: {
                              slidesPerView: 4,
                              spaceBetween: 40,
                            },
                            1024: {
                              slidesPerView: 4,
                              spaceBetween: 30,
                            },
                          }}
                       
                        grabCursor={true}
                        modules={[Autoplay]}
                        className="mySwiper"
                      >
                        { Trendingmovie.map((Trend,i) => (
                            <SwiperSlide key={i}>
                                
                                <div className='Trending-content'>
                                    <Link to=''>
                                    <img src={`https://image.tmdb.org/t/p/original${Trend.poster_path}`} alt=''  />
                                    </Link>
                                </div>
                                

                            </SwiperSlide>

                        ))}
                    </Swiper>


                </Row>
            </Container>
        </div>
    )
}

export default Trending