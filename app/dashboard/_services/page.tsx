'use client'
import React, { useState, useEffect } from 'react'
import { API_URL } from '@/config'

interface Service {
  id: number
  title: string
  description: string
}

const fetchServices = async () => {
  const res = await fetch(`${API_URL}/api/servicepage?populate=*`, {
    cache: 'no-store',
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await res.json()
  return data.data.attributes.services
}

const ServicesPage = () => {
  const [services, setServices] = useState<Service[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const fetchedServices = await fetchServices()
      setServices(fetchedServices)
    }
    fetchData()
  }, [])

  const handleSave = async (id: number, title: string, description: string) => {
    // Implement your API call for saving changes here
    console.log('Saving changes for:', id, title, description)
    // After saving, you can fetch and update the services list again
  }

  const handleDelete = async (id: number) => {
    // Implement your API call for deleting a service here
    console.log('Deleting service with id:', id)
    // After deletion, remove the service from the state
    setServices(services.filter(service => service.id !== id))
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center bg-white p-8 rounded-lg shadow-lg'>
      <div className='flex-1 p-4'>
        <h1 className='text-3xl font-bold mb-8 text-center text-jada-purple-800'>
          My Services
        </h1>
        {services.map((service, index) => (
          <div key={index} className='mb-8 p-4 rounded-lg shadow-lg bg-white'>
            <input
              type="text"
              value={service.title}
              onChange={(e) => {
                const newServices = [...services]
                newServices[index].title = e.target.value
                setServices(newServices)
              }}
              className="text-2xl font-semibold text-jada-purple-700 mb-4"
            />
            <textarea
              value={service.description}
              onChange={(e) => {
                const newServices = [...services]
                newServices[index].description = e.target.value
                setServices(newServices)
              }}
              className="text-md text-gray-700"
            />
            <div className='mt-4'>
              <button
                onClick={() => handleSave(service.id, service.title, service.description)}
                className='mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              >
                Save Changes
              </button>
              <button
                onClick={() => handleDelete(service.id)}
                className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServicesPage
