import Image from 'next/image'
import Link from 'next/link'
import HeroCard from "./components/HeroCard"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>This is the home page</div>
      <Link href="/admin">
        Admin
      </Link>
      <Link href="/aboutpage">
       About Page
      </Link>
      <Link href="/dashboard">
      Dashboard
      </Link>
      <HeroCard
          imageUrl="/path-to-image.jpg"
          imageAlt="Image Description"
          title="Hero Title"
          subtitle="Hero Subtitle"
          body="Hero body text"
        />


    </main>
  )
}
