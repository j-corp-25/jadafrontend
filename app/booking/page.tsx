/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react

import { BookingWidget } from '../components/BookingWidget'
import { Heroimage } from '../components/HeroImage'

export default function Booking() {
  return (
    <main className='flex flex-col items-center justify-between min-h-screen'>
      <div className='flex flex-col mb-10'>
        <h1 className='text-3xl font-bold mb-8 text-center p-4 mt-5'>
          Book a quick Call
        </h1>
        <div className='flex flex-col md:flex-row items-center justify-center md:space-x-8'>
          <div className='bg-yellow-300 p-6 rounded-lg mx-4 max-w-md mt-10'>
            <p className='mb-4 leading-10 text-xl'>
              Discover personalized nanny services by me, tailored for children
              with unique abilities. Experience compassionate support designed
              to nurture development and well-being.
            </p>
            <h2 className='font-semibold mb-4'>
              Empowering Care for Special Children
            </h2>
            <BookingWidget />
          </div>
          <div className='mt-10 max-w-md '>
            <Heroimage />
          </div>
        </div>
      </div>
    </main>
  )
}
