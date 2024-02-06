import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";

const Search = () => {
    
  return (
    <div className="search-box">
              <form action="">
                <input type='text' placeholder='Search Movie' className='checked'/>
            
              <div className="search-icon">
                <FaSearch/>
              </div>
              </form>
            
            </div>
  )
}

export default Search