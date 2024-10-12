import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Share from './pages/Share';
import Feedback from './pages/Feedback';
import Quiz from './pages/Quiz';
import Famchat from './pages/Famchat';
import Postfeed from './pages/Postfeed';
import Profile from './pages/profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Login />} />
        <Route path='/share' element ={<Share/>} /> 
        <Route path='/feed' element={<Feedback />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/fam/:postid' element={<Famchat />} />
        <Route path='/posts' element={<Postfeed />} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    </Router>

  )
}

export default App