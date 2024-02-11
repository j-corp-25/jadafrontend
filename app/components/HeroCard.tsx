import Button from './Button'
import { API_URL } from '@/config'
import Link from 'next/link'
import Image from 'next/image'


export const getHeroImage = async () => {
  const res = await fetch(`${API_URL}/api/imagepage?populate=*`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await res.json()
  return data.data.attributes.Heroimage.data.attributes.formats.medium
}

export const getHeroData = async () => {
  const res = await fetch(`${API_URL}/api/homepage?populate=*`, {
    cache: 'no-store',
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await res.json()
  return data.data.attributes
}



const HeroCard = async () => {
  const image = await getHeroImage()
  const heroData = await getHeroData()


  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center bg-white p-8 rounded-lg shadow-lg'>
      <div className='mb-4 md:mb-0'>
        {image && (
          <Image
            src={image.url}
            height={450}
            width={300}
            alt={image.name}
            className='rounded-lg'
          />
        )}
      </div>
      <div className='space-y-4'>
        <h1 className='text-5xl font-bold'>{heroData.title}</h1>
        <h2 className='text-3xl text-gray-700'>{heroData.sub_title}</h2>
        <p className='text-lg'>{heroData.page_text}</p>
        <div className='flex gap-4'>
          {/* Use Button components and pass the click handlers */}

          <Link href='/booking'>
            <Button text='Book Jada' additionalClasses='w-full' />
          </Link>
          <Link href='/about'>
            <button className='w-full rounded-md bg-white text-jada-purple-800 border-2 border-jada-purple-800 hover:bg-jada-purple-400 hover:text-jada-purple-900 hover:underline hover:decoration-dashed transition-colors text-1xl p-2'>
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroCard
