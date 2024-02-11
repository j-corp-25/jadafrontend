
import { API_URL } from '@/config'
import Image from 'next/image'

const getAboutImage = async () => {
  const res = await fetch(`${API_URL}/api/imagepage?populate=*`,{cache: 'no-store'})
  const data = await res.json()
  return data.data.attributes.Aboutimage.data.attributes.formats.small
}
const AboutImage = async () => {
  const image = await getAboutImage()

  return <Image src={image?.url} height={100} width={200
} alt={image.name}></Image>
}

export default AboutImage
