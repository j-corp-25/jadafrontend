'use client'
import { SessionProvider } from 'next-auth/react'
import React, { ReactNode } from 'react'
import { LogoProvider } from './context/LogoContext'

interface Props {
  children: ReactNode
}

function Provider({ children }: Props) {
  return (
    <SessionProvider>
      <LogoProvider>{children}</LogoProvider>
    </SessionProvider>
  )
}

export default Provider
