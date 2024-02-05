import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Header from './Components/Header'
import { MovieProvider } from './Context/Context'
import Footer from './Components/Footer'
import Movies from './Pages/Movies/Movies'
import MovieDetail from './Pages/MoviesDetails/MovieDetail'
import Discover from './Pages/Discover/Discover'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <MovieProvider>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/discover' element={<Discover/>}/> 
          <Route path='/movies' element={<Movies/>}/> 
          <Route path='/moviesdetail/:id' element={<MovieDetail/>}/> 
        </Routes> 
        <Footer/>
        </MovieProvider>
      </BrowserRouter>
    </>
  )
}

export default App