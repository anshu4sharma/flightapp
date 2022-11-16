import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import myData from '../flightsData/data.json';

import { reverseDate } from '../components/ReverseDate'
const FlightsResult = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { selectedDestination, selectedOrigin, selectedDate } = location?.state
  const [flightData, setFlightData] = useState(myData)
  const [priceRange, setPriceRange] = useState(3080)
  const submitBooking = (Airline, selectedDate, price, country) => {
    navigate('/payment', { state: { Airline, selectedDate, price, country } });
  }
  const handlePriceRange = (e) => {
    setPriceRange(e.target.value)
  }
  console.log(priceRange);
  return (
    <section className="text-gray-600 body-font">
      <div className="container my-4 py-4 w-full flex justify-center flex-col items-center">
        {/* Price Filter Start here */}
        <div className="flex sm:fixed top-24 my-4 left-4 flex-col px-16 py-4 shadow-xl border h-max">
          <div className="flex items-start flex-col space-x-3 py-6">
            <label htmlFor="filterPrice" className='text-xl my-4 text-black font-bold'>Filter Price</label>
            <input type="range" max={3400} min={500} step="100" id='filterPrice' className="w-full h-2 rounded-lg  cursor-pointer dark:bg-gray-700" onChange={handlePriceRange} value={priceRange} />
          </div>
          <div className="divide-y">
            <div className="flex items-start space-x-3 py-6">
              <input type="checkbox" className="border-gray-300 rounded h-5 w-5" />
              <div className="flex flex-col">
                <h1 className="text-gray-700 font-medium leading-none">Air India</h1>
              </div>
            </div>
            <div className="flex items-start space-x-3 py-6">
              <input type="checkbox" className="border-gray-300 rounded h-5 w-5" />
              <div className="flex flex-col">
                <h1 className="text-gray-700 font-medium leading-none">Spice Jet</h1>
              </div>
            </div>
            <div className="flex items-start space-x-3 py-6">
              <input type="checkbox" className="border-gray-300 rounded h-5 w-5" />
              <div className="flex flex-col">
                <h1 className="text-gray-700 font-medium leading-none">Vistara</h1>
              </div>
            </div>
            <div className="flex items-start space-x-3 py-6">
              <input type="checkbox" className="border-gray-300 rounded h-5 w-5" />
              <div className="flex flex-col">
                <h1 className="text-gray-700 font-medium leading-none">Air Asia</h1>
              </div>
            </div>
          </div>
        </div>
        {/* Price Filter End here */}
        <div className="-my-4 rounded-2xl grid grid-cols-1 sm:grid-cols-2 gap-4 divide-gray-100">
          {
            flightData.filter((data) => {
              if (data.country === `${selectedOrigin} to ${selectedDestination}`) { return data }
            }).map((data, index) => {
              return <div key={index} className="py-4 my-3 flex flex-wrap gap-16 md:gap-0 md:flex-nowrap rounded-3xl px-4 border border-white shadow-2xl">
                <div className="item-center justify-center gap-2 md:w-32 flex-shrink-0 flex flex-col">
                  <span className="font-semibold text-xl title-font text-gray-700">{data.Airline}</span>
                  <span className="mt-1 text-gray-500 text-sm">{reverseDate(selectedDate)}</span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-xl font-medium text-gray-900 title-font mb-2">{data.country}</h2>
                  <p className="leading-relaxed text-black"> $ {data.price}</p>
                  <button
                    className="inline-block my-4 rounded border border-black px-4 py-1 text-sm font-medium bg-transparent text-black focus:outline-none focus:ring active:text-indigo-500"
                    onClick={() => submitBooking(data.Airline, selectedDate, data.price, data.country)}
                  >
                    Book now
                  </button>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </section>
  )
}

export default FlightsResult