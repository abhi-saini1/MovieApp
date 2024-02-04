import React from 'react'
import { Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className='footer-section'>
        <Container>
            <Row>
                <div className='col-12 text-center'>
                    <p>&copy; 2024 MovieFlix. All rights reserved</p>
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default Footer