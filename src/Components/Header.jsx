import React, { useState } from 'react'
import { Container,Navbar,Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";

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
           <h3>MovieFlix</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/'>Discover</Nav.Link>
            <Nav.Link as={Link} to='/'>Movie Release</Nav.Link>
          </Nav>
            <div className="search-box">
              <form action="">
                <input type='text' placeholder='Search Movie' className='checked'/>
              </form>
              <div className="search-icon">
                <FaSearch/>
              </div>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header