import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import Provider from './Provider'
import { Analytics } from '@vercel/analytics/react'
import Navbar from '@/app/components/Navbar'
import Footer from './components/Footer'
import Logo from './components/Logo'
// import { LogoProvider } from './context/LogoContext'
const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jada | Home',
  description: 'Your best Nanny is here',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <Provider>
        <body
          className={`${nunito.className} antialiased container-full mx-auto bg-jada-green-500`}
        >
          {/* <LogoProvider> */}
            <Navbar>
              <Logo />
            </Navbar>
            {children}
            <Footer>
              <Logo />
            </Footer>
          {/* </LogoProvider> */}
          <Analytics />
        </body>
      </Provider>
    </html>
  )
}
