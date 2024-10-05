import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Share from './pages/Share';
import Feedback from './pages/Feedback';
import Quiz from './pages/Quiz';
import Famchat from './pages/Famchat';
import Postfeed from './pages/Postfeed';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Login />} />
        <Route path='/share' element ={<Share/>} /> 
        <Route path='/feed' element={<Feedback />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/fam' element={<Famchat />} />
        <Route path='/posts' element={<Postfeed />} />
      </Routes>
    </Router>

  )
}

export default App