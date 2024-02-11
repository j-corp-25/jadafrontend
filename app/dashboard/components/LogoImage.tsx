import { API_URL } from '@/config'
import Image from 'next/image'

const getLogoImage = async () => {
  const res = await fetch(`${API_URL}/api/imagepage?populate=*`)
  const data = await res.json()
  return data.data.attributes.Logo.data.attributes.formats.small
}
const LogoImage = async () => {
  const image = await getLogoImage()

  return <Image src={image.url} height={50} width={50} alt={image.name}></Image>
}

export default LogoImage
