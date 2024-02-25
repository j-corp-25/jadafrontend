'use client'
/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react

import { getCalApi } from '@calcom/embed-react'
import Image from 'next/image'
import { useEffect } from 'react'
export default function Booking() {
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi()
      cal('ui', {
        styles: { branding: { brandColor: '#000000' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    })()
  }, [])
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
            with unique abilities. Experience compassionate support designed to
            nurture development and well-being.
          </p>
          <h2 className='font-semibold mb-4'>
            Empowering Care for Special Children
          </h2>
          <button
            className='bg-jada-pink-base text-jada-text-base py-2 px-4 font-regular rounded-md hover:text-jada-bg-base focus:outline-none focus:ring-2 focus:ring-opacity-50'
            data-cal-namespace=''
            data-cal-link='jordycor/15min'
            data-cal-config='{"layout":"month_view"}'
          >
            Book Jada
          </button>
        </div>
		<div className='mt-10 max-w-md' >

		<Image src={"/jada.png"} height={300} width={300} alt='jada-image '
		className=' rounded-xl border-jada-tertiary-base border-8 shadow-[0_15px_15px_-10px_rgba(0,0,0,1)] '>

		</Image>
		</div>
		</div>
      </div>
    </main>
  )
}
