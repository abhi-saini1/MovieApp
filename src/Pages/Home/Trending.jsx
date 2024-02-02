import React from 'react'
import { useGlobalContext } from '../../Context/Context'
import { Container, Row } from 'react-bootstrap'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
// import {EffectCoverflow,Pagination,Navigation} from 'swiper';
const title = 'Trending Movies'

const Trending = () => {
    const {Trendingmovie} = useGlobalContext()
    console.log(Trendingmovie)
  return (
    <div className='Trending-section section-wrapper'>
        <Container>
            <Row>
                <div className='col-lg-6'>
                    <h3>{title}</h3>
                </div>
            </Row>
            <Row>
            <Swiper
            effect={'cover-flow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate:0,
                stretch:0,
                depth:100,
                modifier:2.5,
            }}
            pagination={{el:'.swiper-pagination',clickable:true}}
            navigation={{
                nextEl:'.swiper-button-next',
                prevEl:'.swiper-button-prev',
                clickable:true,
            }}
            // modules={[EffectCoverflow,Pagination,Navigation]}
        className="swiper_container"
      >
                {Trendingmovie && Trendingmovie.map((Trend)=>(
                    <SwiperSlide key='' className=''>
                        <img src={`https://image.tmdb.org/t/p/w200${Trend.poster_path}`} alt=''/>
                    </SwiperSlide>
       
       ))}
       <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
                <FaArrowLeft/>
        </div>
        <div className="swiper-button-next slider-arrow">
                <FaArrowRight/>
        </div>
        <div className="swiper-pagination">

        </div>
       </div>
      </Swiper>
                   
                
            </Row>
        </Container>
    </div>
  )
}

export default Trending