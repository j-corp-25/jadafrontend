// pages/about.js

import { API_URL } from '@/config'
import Image from 'next/image'
// import AboutImage from '../dashboard/components/AboutImage'
interface AboutInfo {
  info: string
}

interface Certificate {
  id: number
  title: string
}

interface ImageFormat {
  url: string
  name: string
}
interface ImageFormats {
  thumbnail: ImageFormat
  large: ImageFormat
  medium: ImageFormat
  small: ImageFormat
}

interface ImageAttribute {
  data: {
    attributes: {
      formats: ImageFormats
      url: string
    }
  }
}

interface AboutPageAttributes {
  first_para: string
  second_para: string
  certificates: Certificate[]
  image: ImageAttribute
  info: string
}

async function getData() {
  const res = await fetch(`${API_URL}/api/aboutpage?populate=*`, {
    cache: 'no-store',
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await res.json()
  return data.data.attributes as AboutPageAttributes
}

async function getAboutImage() {
  const res = await fetch(`${API_URL}/api/imagepage?populate=*`, {
    cache: 'no-store',
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await res.json()
  return data.data.attributes.Aboutimage.data.attributes.formats.medium
}

export default async function Page() {
  const data = await getData()
  const image = await getAboutImage()
  const { first_para, second_para, certificates, info } = data

  // console.log({ RESPONSE: data })
  // console.log({ 'IMAGE RESPONSE': data.image.data.attributes.formats })

  return (
    <main className='flex flex-col items-center justify-between min-h-screen'>
      <div className='flex flex-col items-center justify-center px-4 py-8'>
        <div className='flex flex-col md:flex-row items-center justify-center md:space-x-8'>
          {/* Image container */}
          <div className='mt-10 max-w-md '>
            {image ? (
              <Image
                src={image.url}
                className=' rounded-xl border-jada-tertiary-base border-8 shadow-[0_15px_15px_-10px_rgba(0,0,0,1)] '
                alt='jada'
                height={300}
                width={300}
              />
            ) : (
              <p>Image not found</p>
            )}
          </div>

          {/* Text container */}
          <div className='mt-8 md:mt-10 p-6 rounded-lg  max-w-md flex flex-col'>
            <span className='text-4xl md:text-3xl font-regular text-jada-text-base mb-4 self-center'>
              About Me
            </span>
            <p className='text-jada-text-base md:text-lg text-xl bg-jada-yellow-base text-pretty p-5 rounded-lg shadow-[0_15px_15px_-10px_rgba(0,0,0,1)] space-y-5 '>
              {info}
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
