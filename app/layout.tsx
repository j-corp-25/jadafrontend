import type { Metadata } from 'next'
import { Poppins } from 'next/font/google';
import './globals.css'
import Provider from './Provider'
import { Analytics } from '@vercel/analytics/react'
import Navbar from '@/app/components/Navbar'
import Footer from './components/Footer'
import Logo from './components/Logo'
// import { LogoProvider } from './context/LogoContext'
const poppins = Poppins({

  subsets: ['latin'],
  // Optionally, specify font weights and styles you need
  weight: ['400', '700'],
});


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
          className={`${poppins.className} antialiased container-full mx-auto bg-jada-bg-200 text-jada-text-base`}
        >
          {/* <LogoProvider> */}
            <Navbar>
              <Logo />
            </Navbar>
            {children}
            <Footer>
              <Logo />
            </Footer>
          <Analytics />
        </body>
      </Provider>
    </html>
  )
}
