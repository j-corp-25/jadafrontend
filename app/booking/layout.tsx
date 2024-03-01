import { Metadata } from "next";
import { Heroimage } from "../components/HeroImage";



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

        <div className='flex flex-col md:flex-row items-center justify-center md:space-x-8'>

        <Heroimage />
        {children}
        </div>
      </main>
    )
  }
