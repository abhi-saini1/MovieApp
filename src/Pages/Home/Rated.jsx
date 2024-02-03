import React from 'react'
import { useGlobalContext } from '../../Context/Context'
import { Container,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Pageination from '../../Components/Pageination'
const title = 'Top Rated Movies'
const Rated = () => {
    const {Ratedmovie} = useGlobalContext()
    console.log(Ratedmovie)
  return (
    <div className='Rated-section section-wrapper'>
        <Container>
            <Row>
                <div className='col-lg-6'>
                    <h3>{title}</h3>
                </div>
            </Row>
            <Row className=''>
                {
                    Ratedmovie.map((Rated,i)=>(
                        <div className='col-lg-3 col-sm-4' key={i}>
                            <div className='rating-content'>
                                <Link to=''>
                                <img src={`https://image.tmdb.org/t/p/w200${Rated.poster_path}`} alt='top-rated' className='img-fluid'/>
                                </Link>
                               
                            </div>
                        </div>
                    ))
                }
                <Pageination/>
            </Row>
        </Container>
    </div>
  )
}

export default Rated