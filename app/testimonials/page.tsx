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

export default async function TestimonialsPage() {
  const data = await getData()
  const { testimonials } = data
  return (
    <main className='justify-between min-h-screen w-full'>
      <div className=' p-4 flex flex-col md:flex-row mx-12 md:mx-24 lg:mx-72 '>
        <div className='flex-1 p-4'>
          <h1 className='text-3xl font-bold mb-8 text-center '>Testimonials</h1>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className='mb-8 p-4 rounded-lg shadow-lg bg-jada-yellow-base flex flex-col justify-center items-center text-center  '
            >
              <h2 className='text-2xl font-semibold text-jada-text-base mb-4 '>
                {testimonial.name}
              </h2>
              <p className=' px-2 rounded-lg  text-gray-700 bg-jada-bg-base'>
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
