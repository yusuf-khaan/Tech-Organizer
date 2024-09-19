import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Share from './pages/Share';
import Feedback from './pages/Feedback';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/share' element ={<Share/>} /> 
        <Route path='/feed' element={<Feedback />} />
      </Routes>
    </Router>

  )
}

export default App