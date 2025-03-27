import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Home from './pages/Home'
import Details from './pages/Details'
import Favorites from './pages/Favorites'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/image/:id' element={<Details />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </Router>
  )
}

export default App
