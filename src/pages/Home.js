import { useFormik } from 'formik';
import flightSearchSchema from '../schema/flightSearch'
import Select from 'react-select'

const Home = () => {
  const { values, handleSubmit, handleChange, errors, touched } = useFormik({
    initialValues: {
      origin: "",
      destination: "",
      selectDate: ""
    },
    validationSchema: flightSearchSchema,
    onSubmit: () => {
      console.log(values);
    }
  })
  const options = [
    { value: 'New York', label: 'New York' },
    { value: 'London', label: 'London' },
    { value: 'Kolkata', label: 'Kolkata' },
    { value: 'Lahore', label: 'Lahore' },
    { value: 'Delhi', label: 'Delhi' },
  ]
  return (
    <>
      <div className='w-full flex justify-center flex-col items-center '>
        <h1 className='font-bold text-2xl my-4'>Search Flight !</h1>
        <form onSubmit={handleSubmit} className='w-max shadow-md rounded-3xl bg-white h-full grid grid-flow-row p-8'>
          <div className='flex flex-col'>
            <label className='flex flex-row pr-8'> <span className="material-symbols-outlined rotate-45	">
              flight
            </span> Origin Airport</label>
            <Select options={options} name="origin" placeholder='Enter city or airport' className='my-4' />
            {errors.origin && touched.origin ? (
              <p className="text-red-900">{errors.origin}</p>
            ) : null}
          </div>

          <div className='flex flex-col'>
            <label className='flex flex-row pr-8'> <span className="material-symbols-outlined rotate-45	">
              flight
            </span>  Destination Airport</label>
            <Select options={options} className="my-4" name="origin" placeholder='Enter city or airport' />
            {errors.destination && touched.destination ? (
              <p className="text-red-900">{errors.destination}</p>
            ) : null}
          </div>
          <div className='flex flex-col'>
            <label className='flex flex-row pr-8'> <span className="material-symbols-outlined">
              calendar_month
            </span> Select Departure</label>
            <input onChange={handleChange} value={values.selectDate} type="date" className='border mx-12 py-2 flex px-6 my-4' name="selectDate" placeholder='Departure' />``
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