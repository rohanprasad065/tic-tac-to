import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar/Navbar'
import About from './pages/About';
import TicTacToe from './pages/Game';

const App = () => {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<TicTacToe/>} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>
  )
}

export default App
