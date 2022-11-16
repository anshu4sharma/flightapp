import { useLocation } from "react-router-dom"
import { reverseDate } from '../components/ReverseDate'
export default function FlightConfirmation() {
  const location = useLocation()
  const { values, Airline, country, price, selectedDate } = location.state
  const { email, fname, lname, name, phone ,passport} = values
  console.log(name);
  return (
    <div className="overflow-hidden w-full flex items-center justify-center ">
      <div className="flex flex-col w-fit bg-white ">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-2xl leading-8 text-gray-900 font-semibold ">Congratulation your flight is successfully booked</h3>
          <p className="mt-1 max-w-2xl py-4 text-sm text-gray-500">We have send you a confirmation mail on your email address.</p>
          <p className="mt-1 font-semibold max-w-2xl text-xl ">Personal details and application.</p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{`${fname} ${lname}`}</dd>
            </div>
            <div className="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Airline Name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{Airline}</dd>
            </div>
            <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Phone Number</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {phone}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Email address</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{email}</dd>
            </div>
            <div className="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Bill Amount</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">${price}</dd>
            </div>
            <div className="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Passport Number</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">${passport}</dd>
            </div>
            <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Origin → Destination</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {country}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Selected Date</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {reverseDate(selectedDate)}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}
