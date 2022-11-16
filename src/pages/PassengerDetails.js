import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useFormik } from "formik";
import PassengerDetailSchema from '../schema/PassengerDetails'
const PassengerDetails = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const reverseDate = date => date.split("-").reverse().join("-")
  const { Airline, country, price, selectedDate } = location.state
  const { handleSubmit, values, handleChange, touched, errors } = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      fname: "",
      lname: "",
    },
    validationSchema: PassengerDetailSchema,
    onSubmit: () => {
      navigate("/flightconfirmation", { state: { values, Airline, country, price, selectedDate } })
    },
  });
  const { name, phone, email, fname, lname } = values
  return (
    <>
      <div className="h-full">
        <div className="max-w-screen-2xl px-4">
          <div className="mx-auto max-w-lg text-left">
            <h1 className="text-3xl my-4 font-bold sm:text-3xl">Review Your Flight</h1>
            <div className="flex flex-col">
              <p className='py-4 text-xl'>{country}</p>
              <div className="flex justify-between">
                <p className='py-4 text-xl'>{reverseDate(selectedDate)}</p>
                <p className='py-4 text-xl'>{Airline}</p>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-lg text-left">
            <p className="mt-4 text-gray-500">
              Booking details will be sent to your email after payment
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="mx-auto mt-8 mb-0 max-w-lg space-y-4">
              <h1 className='text-xl font-semibold'>Contact Details</h1>
              <div>
                <label htmlFor="email">Name</label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full rounded-lg  border-white p-3 text-sm shadow-sm"
                    placeholder="Enter name"
                    onChange={handleChange}
                    name={'name'}
                    value={name}
                  />
                </div>
                {errors.name && touched.name ? (
                  <p className="text-red-900">{errors.name}</p>
                ) : null}
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <div className="relative">
                  <input
                    type="email"
                    className="w-full rounded-lg  border-white p-3 text-sm shadow-sm"
                    placeholder="Enter your email"
                    onChange={handleChange}
                    name={'email'}
                    value={email}
                  />
                </div>
                {errors.email && touched.email ? (
                  <p className="text-red-900">{errors.email}</p>
                ) : null}
              </div>
              <h1 className='text-xl font-semibold'>Passenger Info</h1>
              <div>
                <label htmlFor="text" >First Name</label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full rounded-lg  border-white p-3 text-sm shadow-sm"
                    placeholder="Enter First Name"
                    onChange={handleChange}
                    name={'fname'}
                    value={fname}
                  />
                </div>
                {errors.fname && touched.fname ? (
                  <p className="text-red-900">{errors.fname}</p>
                ) : null}
              </div>
              <div>
                <label htmlFor="text" >Last Name</label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full rounded-lg  border-white p-3 text-sm shadow-sm"
                    placeholder="Enter Last Name"
                    onChange={handleChange}
                    name={'lname'}
                    value={lname}
                  />
                </div>
                {errors.lname && touched.lname ? (
                  <p className="text-red-900">{errors.lname}</p>
                ) : null}
              </div>
              <div>
                <label htmlFor="text" >Phone Number</label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full rounded-lg  border-white p-3 text-sm shadow-sm"
                    placeholder="Enter Phone Number"
                    onChange={handleChange}
                    name={'phone'}
                    value={phone}
                  />
                </div>
                {errors.phone && touched.phone ? (
                  <p className="text-red-900">{errors.phone}</p>
                ) : null}
              </div>
              <div className='flex flex-col'>
                <p className='text-xl font-semibold py-3'>Price Summary</p>
                <div className="bg-white shadow-sm w-full rounded-lg p-4 h-12 flex items-center justify-between">
                  <p>Total Chargeable</p>
                  <p>${price}</p>
                </div>
              </div>
              <div className="flex items-center justify-between py-4">
                <button
                  to={"/flightconfirmation"}
                  type="submit"
                  className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white">
                  Complete Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default PassengerDetails