import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import PaymentPage from './pages/PaymentPage';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flight" element={<PaymentPage />} />
        {/* <Route path="/flight/book:id" element={<Flight />} /> */}
      </Routes>
    </>
  )
}

export default App