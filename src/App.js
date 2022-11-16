import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/movie/:id" element={<SingleMovie />} /> */}
      </Routes>
    </>
  )
}

export default App