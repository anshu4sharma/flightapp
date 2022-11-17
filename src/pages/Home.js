import Select from 'react-select'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate()
  const options = [
    { value: 'Paris', label: 'Paris' },
    { value: 'London', label: 'London' },
    { value: 'Mumbai', label: 'Mumbai' },
    { value: 'Lahore', label: 'Lahore' },
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Banglore', label: 'Banglore' },
  ]
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedOrigin, setSelectedOrigin] = useState(options.label)
  const [selectedDestination, setSelectedDestination] = useState(options.label)
  const [error, setSameValueError] = useState(false)
  const handleSelectedOrigin = (e) => {
    setSelectedOrigin(e.label)
  }
  const handleSelectedDestination = (e) => {
    setSelectedDestination(e.label)
  }
  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (selectedOrigin === selectedDestination) {
      setSameValueError(true)
      alert("Origin and destination should be different")
    }
    else{
      navigate('/flights', { state: { selectedOrigin, selectedDestination, selectedDate } });
    }
  }

  console.log(selectedOrigin);
  return (
    <>
      <div className='w-full flex justify-center flex-col items-center'>
        <h1 className='font-bold text-2xl mb-4'>Search Flight !</h1>
        <form onSubmit={handleFormSubmit} className='w-96 shadow-md rounded-3xl bg-white h-full flex flex-col p-8'>
          <div className='flex flex-col'>
            <label className='flex '>  Origin Airport</label>
            <Select required options={options} onChange={handleSelectedOrigin} placeholder='Enter city or airport' className='my-4 ' />
          </div>
          <div className='flex flex-col'>
            <label className='flex '> Destination Airport</label>
            <Select required options={options} onChange={handleSelectedDestination} className="my-4" name="origin" placeholder='Enter city or airport' />
          </div>
          <div className='flex flex-col items-start'>
            <label className='flex'>Select Departure</label>
            <input type="date" className='my-4 border border-[#cccccc] w-full' required onChange={(e) => setSelectedDate(e.target.value)} name="selectDate" placeholder='Select Date' />
          </div>
          {
            error && <p className='text-red-800 my-4'>Origin and destination should be different</p>
          }
          <div className='shadow-xl'>
            <button
              type='submit'
              className="w-full rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition"
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