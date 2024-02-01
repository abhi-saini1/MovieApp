import React from 'react'
import { Container,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaPlay } from "react-icons/fa";

const Home = () => {
  return (
    <div className='home-section'> 
      <Container>
        <Row>
          <div className="col-lg-6">
            <h2>Let's Make Your Own Cinema</h2>
            <p>You can still enjoy the latest movies and other movies<br></br>online and at a lower price</p>
            <div className='home-btn'>
              <Link to='' className='btn'>Get Started</Link>
              <Link to='' className='btn-1'>Show Plans</Link>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='play-btn'>
              <button>
                  <FaPlay/>
              </button>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default Home