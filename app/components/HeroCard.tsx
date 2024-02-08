import React from 'react'
import Image from 'next/image'
import Button from './Button'
import { API_URL } from '@/config'
import Link from 'next/link'

interface HeroCardProps {
  imageUrl?: string
  imageAlt?: string
  title?: string
  subtitle?: string
  body?: string
}
export const getHeroData = async () => {
  const res = await fetch(`${API_URL}/api/homepage`)
  const data = await res.json()
  return data.data.attributes
}

const HeroCard: React.FC<HeroCardProps> = async ({
  imageUrl,
  imageAlt,
  title,
  subtitle,
  body,
}) => {
  const heroData = await getHeroData()
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center bg-white p-8 rounded-lg shadow-lg'>
      <div className='mb-4 md:mb-0'>
        <Image
          src='/jada.png'
          alt={imageAlt}
          width={500}
          height={300}
          className='rounded-lg'
        />
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
            <button className='w-full rounded-md bg-white text-jada-purple-800 border-2 border-jada-purple-800 hover:bg-jada-purple-400 hover:text-jada-purple-900 hover:underline hover:decoration-dashed text-underline-offset-2px transition-colors'>
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroCard
