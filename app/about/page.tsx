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

async function getAboutImage(){
  const res = await fetch(`${API_URL}/api/imagepage?populate=*`,{
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
  const {
    first_para,
    second_para,
    certificates,
    info,

  } = data

  // console.log({ RESPONSE: data })
  // console.log({ 'IMAGE RESPONSE': data.image.data.attributes.formats })

  return (
    <div className='flex flex-col items-center justify-between min-h-screen px-4 md:px-8 py-8'>
      <div className='w-full max-w-3xl mx-auto flex flex-col space-y-10'>
        <p className='text-gray-800 text-lg md:text-xl'>{first_para}</p>
        <p className='text-gray-800 text-lg md:text-xl'>{second_para}</p>
        <p className='text-gray-600 text-base md:text-lg'>{info}</p>
        <div>
          <Image src={image.url} height={300} width={200} alt={'jada'}/>
        </div>

        <ul className='list-disc list-inside text-lg md:text-xl text-left space-y-2'>
          {certificates.map((cert, index) => (
            <li
              key={index}
              className='text-jada-purple-700 hover:text-indigo-700 transition-colors'
            >
              {cert.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
