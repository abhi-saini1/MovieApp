import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Header from './Components/Header'
import { MovieProvider } from './Context/Context'
import Footer from './Components/Footer'
import Movies from './Pages/Movies/Movies'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <MovieProvider>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/movies' element={<Movies/>}/> 
        </Routes> 
        <Footer/>
        </MovieProvider>
      </BrowserRouter>
    </>
  )
}

export default App