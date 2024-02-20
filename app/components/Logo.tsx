
import Image from 'next/image'
import Link from 'next/link'
import { API_URL } from '../../config/index'

const getLogo = async () => {
  const res = await fetch(`${API_URL}/api/imagepage?populate=*`, {cache: 'no-store'})
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await res.json()
  return data.data.attributes.Logo.data.attributes.formats.thumbnail

}

const Logo = async () => {
  const logo = await getLogo()

  return (
    <Link href="/">
      <Image src={logo.url} alt={logo.name} height={50} width={50} />
    </Link>
  )
}

export default Logo
