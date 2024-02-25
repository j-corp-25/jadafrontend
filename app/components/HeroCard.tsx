import Button from './Button'
import { API_URL } from '@/config'
import Link from 'next/link'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa'

export const getHeroImage = async () => {
  const res = await fetch(`${API_URL}/api/imagepage?populate=*`, {
    cache: 'no-store',
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await res.json()
  return data.data.attributes.Heroimage.data.attributes.formats.small
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

async function getCertData() {
  const res = await fetch(`${API_URL}/api/aboutpage?populate=*`, {
    cache: 'no-store',
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await res.json()
  return data.data.attributes
}

const HeroCard = async () => {
  const data = await getCertData()
  const image = await getHeroImage()
  const heroData = await getHeroData()
  const { certificates } = data
  return (
    <main className='flex flex-col items-center justify-between min-h-screen'>
      <div className='flex flex-col bg-jada-yellow-base p-5 rounded-lg max-w-[57rem] md:mx-15 mx-10 mt-[7rem] space-y-5 shadow-[0_15px_15px_-10px_rgba(0,0,0,1)] lg:min-w-[65rem]'>
        <div className='flex md:flex-row flex-col md:space-x-5 space-y-5 lg:justify-evenly'>
          <div className='flex justify-center items-center space-y-5'>
            {image && (
              <Image
                src={image.url}
                height={300}
                width={300}
                alt={image.name}
                className='shadow-[0_15px_15px_-10px_rgba(0,0,0,1)] border-8 border-jada-tertiary-base rounded-3xl'
              />
            )}
          </div>
          <div className='flex flex-col justify-center space-y-5'>
            <h1 className='text-2xl font-bold'>{heroData.title}</h1>

            <ul className='text-lg md:text-xl text-left space-y-5 mt-4'>
              {certificates.map((cert, index) => (
                <li
                  key={index}
                  className='flex items-center text-jada-text-base transition-colors'
                >
                  <FaCheck className='text-jada-accent-base' />
                  <span className='ml-2'>{cert.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>


        <div className='flex flex-col space-y-5'>
          <span className='inline-block mt-1  text-gray-600 self-center text-xl font-semibold'>
            Your child will be well taken care off
          </span>

          <Link href='/booking'>
            <Button text='Book Jada' additionalClasses='w-full ' />
          </Link>
        </div>
      </div>
    </main>
  )
}

export default HeroCard
