import React from 'react'

import { useGlobalContext } from '../Context/Context';

const Pageination = () => {
    const {page,totalPages,nextPage,previousPage} = useGlobalContext()
    // console.log(setPage)

  
 

  return (
    <>
        <button onClick={previousPage} disabled={page === 1}>
        Previous
      </button>
      <span>Page {page} of {totalPages}</span>
      <button onClick={nextPage} disabled={page === totalPages}>
        Next
      </button>
      
    </>
  )
}

export default Pageination