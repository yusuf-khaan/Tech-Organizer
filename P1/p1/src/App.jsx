import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Share from './pages/Share';
import Feedback from './pages/Feedback';
import Quiz from './pages/Quiz';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Login />} />
        <Route path='/share' element ={<Share/>} /> 
        <Route path='/feed' element={<Feedback />} />
        <Route path='/quiz' element={<Quiz />} />

      </Routes>
    </Router>

  )
}

export default App