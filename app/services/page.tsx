import { API_URL } from '@/config'
import type { Metadata } from 'next'

interface Service {
  id: number
  title: string
  description: string
}

export const metadata: Metadata = {
  title: 'Jada | Services',
  description: 'Your best Nanny is here',
}

interface ServicePageAttributes {
  services: Service[]
}

async function getData() {
  const res = await fetch(`${API_URL}/api/servicepage?populate=*`, {
    cache: 'no-store',
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await res.json()
  return data.data.attributes as ServicePageAttributes
}

export default async function ServicesPage() {
  const data = await getData()
  const { services } = data
  return (
    <main className='justify-between min-h-screen w-full'>
      <div className='p-4 flex flex-col md:flex-row mx-12 md:mx-24 lg:mx-96 '>


      <div className='flex-1 p-4'>
        <h1 className='text-3xl font-bold mb-8 text-center text-jada-purple-800'>
          My Services
        </h1>
        {services.map((service, index) => (
          <div key={index} className='mb-8 p-4 rounded-lg shadow-lg bg-white'>
            <h2 className='text-2xl font-semibold text-jada-purple-700 mb-4'>
              {service.title}
            </h2>
            <p className='text-md text-gray-700'>{service.description}</p>
          </div>
        ))}
      </div>
        </div>
    </main>
  )
}
