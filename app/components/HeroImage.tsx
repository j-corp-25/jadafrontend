import { API_URL } from '@/config'
import Image from 'next/image'

export const getHeroImage = async () => {
  const res = await fetch(`${API_URL}/api/imagepage?populate=*`, {
    cache: 'no-store',
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await res.json()
  return data.data.attributes.Heroimage.data.attributes.formats.medium
}

export const Heroimage = async () => {
  const image = await getHeroImage()
  return (
    <Image
      src={image.url}
      height={400}
      width={400}
      alt={image.name}
      className=' rounded-xl border-jada-tertiary-base border-8 shadow-[0_15px_15px_-10px_rgba(0,0,0,1)] '
    />
  )
}
