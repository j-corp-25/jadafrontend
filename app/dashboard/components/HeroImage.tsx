import 'server-only'

import { API_URL } from '@/config'
import Image from 'next/image'

const getHeroImage = async () => {
  const res = await fetch(`${API_URL}/api/imagepage?populate=*`,{cache: 'no-store'})
  const data = await res.json()
  return data.data.attributes.Heroimage.data.attributes.formats.medium
}
const HeroImage = async () => {
  const image = await getHeroImage()

  return <Image src={image.url} height={500} width={300} alt={image.name} className='rounded-lg'></Image>
}

export default HeroImage
