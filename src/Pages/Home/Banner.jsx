import React from 'react'
import { Container,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { motion} from 'framer-motion'
const textVarients = {
  initial:{
    x:-500,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1,
    },
  }

}

const Banner = () => {
  return (
    <div className='banner-section' >
        <Container>
        <Row >
          <motion.div className="col-lg-6" variants={textVarients} animate='animate' initial='initial'>
            <motion.h2 variants={textVarients}>Let's Make Your Own Cinema</motion.h2>
            <motion.p variants={textVarients}>You can still enjoy the latest movies and other movies<br></br>online and at a lower price</motion.p>
            <div className='home-btn'>
              <Link to='' className='btn' variants={textVarients}>Get Started</Link>
              <Link to='' className='btn-1' variants={textVarients}>Show Plans</Link>
            </div>
          </motion.div>
        </Row>
      </Container>
    </div>
  )
}

export default Banner