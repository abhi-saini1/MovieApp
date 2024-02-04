import React from 'react'

import { useGlobalContext } from '../Context/Context';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Pageination = () => {
    const {page,totalPages,nextPage,previousPage} = useGlobalContext()
    // console.log(setPage)

  
 

  return (
    <div className='pageination-section'>
        {/* <button onClick={previousPage} disabled={page === 1}>
        Previous
      </button>
      <span>Page {page} of {totalPages}</span>
      <button onClick={nextPage} disabled={page === totalPages}>
        Next
      </button> */}
        <Container>
          <Row>
            <div className='col-12'>
              <ul className='pageinate'>
                <li>
                  <Link onClick={previousPage} >Prev</Link>
                </li>
                <li>
                  <Link >1</Link>
                </li>
                <li>
                  <Link >2</Link>
                </li>

                <li>
                  <Link>3</Link>
                </li>
                <li>
                  <Link>4</Link>
                </li>
                <li>
                  <Link>5</Link>
                </li>
                <li>
                  <Link onClick={nextPage}>Next</Link>
                </li>
              </ul>
              
              <span>Page {page} of TotalPages {totalPages}</span>
              
            </div>
          </Row>
        </Container>
      
    </div>
  )
}

export default Pageination