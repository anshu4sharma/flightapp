import React, { useState } from 'react'
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import addDays from 'date-fns/addDays'
import { useFormik } from 'formik';
import flightSearchSchema from '../schema/flightSearch'
const Home = () => {
  const [value, onChange] = useState([new Date(), addDays(new Date(), 7)]);
  const { values, handleSubmit, handleChange, errors, touched } = useFormik({
    initialValues: {
      origin: "",
      destination: "",
    },
    validationSchema:flightSearchSchema,
    onSubmit: () => {
      console.log(values);
    }
  })
  console.log(value);
  return (
    <>
      <div className='w-full flex justify-center flex-col items-center '>
        <h1 className='font-bold text-2xl my-4'>Search Flight !</h1>
        <form onSubmit={handleSubmit} className='w-max shadow-md rounded-3xl bg-white h-full grid grid-flow-row p-8'>
          <div className='flex flex-col'>
            <label className='flex flex-row pr-8'> <span className="material-symbols-outlined rotate-45	">
              flight
            </span> Origin Airport</label>
            <input type="text" value={values.origin} name="origin" placeholder='New Delhi' className='border border-black mx-6 my-2 flex p-3' onChange={handleChange} />
          </div>
          {errors.origin && touched.origin ? (
            <p className="text-red-900">{errors.origin}</p>
          ) : null}
          <div className='flex flex-col'>
            <label className='flex flex-row pr-8'> <span className="material-symbols-outlined rotate-45	">
              flight
            </span>  Destination Airport</label>
            <input type="text" value={values.destination} name="destination" placeholder='New York' className='border border-black mx-6 my-2 flex p-3' onChange={handleChange} />
          </div>
          {errors.destination && touched.destination ? (
            <p className="text-red-900">{errors.destination}</p>
          ) : null}
          <div className='flex flex-col'>
            <label className='flex flex-row pr-8'> <span className="material-symbols-outlined rotate-45	">
              flight
            </span>  Select date</label>
            <DateRangePicker className='mx-6 my-2 flex p-3' minDate={new Date()} onChange={onChange} value={value} />
          </div>
          {errors.dateRange && touched.dateRange ? (
            <p className="text-red-900">{errors.dateRange}</p>
          ) : null}
          <div className='grid place-content-center'>
            <button
              type='submit'
              className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition "
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </>

  )
}

export default Home