import { API_URL } from '@/config'
import { FaExternalLinkAlt } from 'react-icons/fa'
import Link from 'next/link'
interface Resource {
  id: number
  title: string
  url: string
  description: string
}

interface ResourcePageAttributes {
  resources: Resource[]
}

async function getData() {
  const res = await fetch(`${API_URL}/api/resourcepage?populate=*`, {
    cache: 'no-store',
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await res.json()
  return data.data.attributes as ResourcePageAttributes
}

export default async function ResourcesPage() {
  const data = await getData()
  const { resources } = data
  return (
    <main className='justify-between min-h-screen w-full'>
      <div className=' p-4 flex flex-col md:flex-row mx-12 md:mx-24 lg:mx-72  '>
        <div className='flex-1 p-4'>
          <h1 className='text-[2.13rem] font-bold mb-8 text-center text-jada-text-base'>
            Resources
          </h1>
          {resources.map((resource, index) => (
            <div key={index} className='mb-8 p-4 rounded-lg'>
              <h2 className='text-[1.25rem] font-regular mb-2'>
                {resource.title}
              </h2>
              <div className='mb-2'>
                <a
                  href={resource.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-jada-text-base hover:text-jada-accent-base underline underline-offset-2 decoration-jada-pink-base text-[1rem]'
                >
                  {resource.url}{' '}
                  <FaExternalLinkAlt className='inline-block ml-1 mb-1' />
                </a>
              </div>
              <p className='text-md text-jada-text-base  bg-jada-yellow-base p-2 max-w-md rounded-lg'>
                {resource.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
