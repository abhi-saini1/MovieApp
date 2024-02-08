import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../Context/Context'
import MovieCard from '../../Components/MovieCard'

const Search = () => {
    const {searchQuery,setSearchQuery,fetchSearchMovies} = useGlobalContext();
   
    const handleChange = (e) => {
        setSearchQuery(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        fetchSearchMovies();
    }
   
  return (
    <div className='search-section'>
        <Container>
            <Row>
                <div className='col-lg-12'>
                    <div className='search-box'>
                        <form onSubmit={handleSubmit}>
                            <input type='text' className='input' value={searchQuery} onChange={handleChange} placeholder='Search Movie...'/>
                            <Link to='' className='search-btn'>Search</Link>
                        </form>
                    </div>
                </div>
                
            </Row>
            <Row>
            <MovieCard/>
            </Row>
        </Container>
    </div>
  )
}

export default Search