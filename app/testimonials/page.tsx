import { API_URL } from '@/config'

interface Testimonial {
  id: number
  name: string
  text: string
}

interface TestimonialsPageAttributes {
  testimonials: Testimonial[]
}

async function getData() {
  const res = await fetch(`${API_URL}/api/testimonialpage?populate=*`, {
    cache: 'no-store',
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await res.json()
  return data.data.attributes as TestimonialsPageAttributes
}

export default async function ServicesPage() {
  const data = await getData()
  const { testimonials } = data
  return (
    <div className='container mx-auto p-4 flex flex-col md:flex-row '>
      <div className='flex-1 p-4'>
        <h1 className='text-3xl font-bold mb-8 text-center text-jada-purple-800'>
          My Services
        </h1>
        {testimonials.map((testimonial, index) => (
          <div key={index} className='mb-8 p-4 rounded-lg shadow-lg bg-white'>
            <h2 className='text-2xl font-semibold text-jada-purple-700 mb-4'>
              {testimonial.name}
            </h2>
            <p className='text-md text-gray-700'>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
