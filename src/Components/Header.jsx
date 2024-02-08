import React, { useState } from 'react'
import { Container,Navbar,Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import {motion} from 'framer-motion'

const Header = () => {
  const [headerFixed, setHeaderFixed] = useState(false)

  // change scroll
  const changeScroll = ()=>{
    const scrollValue = document.documentElement.scrollTop;
    scrollValue > 50 ? setHeaderFixed(true) : setHeaderFixed(false);
  }
  window.addEventListener('scroll', changeScroll);

  return (
    <>
         <Navbar expand="lg" className={`${headerFixed === true ? "header-fixed" : ""} `}>
      <Container>
        <Navbar.Brand>
           <motion.h3 initial={{opacity:0, scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}}>MovieFlix</motion.h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/discover'>Discover</Nav.Link>
            <Nav.Link as={Link} to='/movies'>Movies</Nav.Link>
            <Nav.Link as={Link} to='/search'>
              <FaSearch/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header