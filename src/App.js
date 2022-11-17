import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import FlightsResult from './pages/FlightsResult';
import PassengerDetails from './pages/PassengerDetails';
import FlightConfirmation from './pages/FlightConfirmation';
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<FlightsResult />} />
        <Route path="/payment" element={<PassengerDetails />} />
        <Route path="/flightconfirmation" element={<FlightConfirmation />} />
      </Routes>
    </>
  )
}

export default App