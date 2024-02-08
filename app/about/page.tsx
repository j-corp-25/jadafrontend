// pages/about.js
import { API_URL } from '@/config'
import Image from 'next/image'


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
    thumbnail: ImageFormat;
    large: ImageFormat;
    medium: ImageFormat;
    small: ImageFormat;
  }

  interface ImageAttribute {
    data: {
      attributes: {
        formats: ImageFormats;
        url: string;
      };
    };
  }

interface AboutPageAttributes {
  first_para: string
  second_para: string
  certificates: Certificate[]
  about: AboutInfo
  image: ImageAttribute
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

export default async function Page() {
  const data = await getData()
  const {
    first_para,
    second_para,
    certificates,
    about: { info },
  } = data

  const { thumbnail, large, medium, small } = data.image.data.attributes.formats

  return (
    <div className='flex flex-col items-center justify-between min-h-screen px-4 md:px-8 py-8'>
      <div className='w-full max-w-3xl mx-auto flex flex-col space-y-10'>

        <p className='text-gray-800 text-lg md:text-xl'>{first_para}</p>
        <p className='text-gray-800 text-lg md:text-xl'>{second_para}</p>
        <p className='text-gray-600 text-base md:text-lg'>{info}</p>
        <div>
            <Image src={large.url} width={200} height={200} alt={large.name}  className='rounded-lg shadow-xl'></Image>
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

// Hypothetical example of fetching data server-side for the component
// Adjust according to actual Next.js 13 server component data fetching capabilities