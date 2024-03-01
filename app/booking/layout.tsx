import { Metadata } from "next";



export const metadata: Metadata = {
    title: 'Jada | Booking',
    description: 'Your best Nanny is here',
  }


export default function BookingLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <main className='flex flex-col items-center justify-between min-h-screen'>
        {children}
      </main>
    )
  }
