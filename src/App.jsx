import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Header from './Components/Header'
import { MovieProvider } from './Context/Context'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <MovieProvider>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/> 
        </Routes> 
        </MovieProvider>
      </BrowserRouter>
    </>
  )
}

export default App