'use client'


// BookingWidget.js or BookingWidget.tsx if you're using TypeScript
import { useEffect } from 'react'
import { getCalApi } from '@calcom/embed-react'

export const BookingWidget = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi()
      cal('ui', {
        styles: { branding: { brandColor: '#000099' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    })()
  }, [])

  return (
    <button
              className='bg-jada-pink-base text-jada-text-base py-2 px-4 font-regular rounded-md hover:text-jada-accent-base focus:outline-none focus:ring-2 focus:ring-opacity-50'
              data-cal-namespace=''
              data-cal-link='miss-jada/15min'
              data-cal-config='{"layout":"month_view"}'
            >
              Book Jada
            </button>
  ) 
}
