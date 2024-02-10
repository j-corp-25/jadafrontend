

import React from 'react';
import { Nunito } from 'next/font/google'
import Sidebar from './components/Sidebar'


const nunito = Nunito({ subsets: ['latin'] })

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen bg-gray-100">
      <div className="w-64 bg-white sticky top-0 h-screen"> {/* Sidebar styles */}
        <Sidebar />
      </div>
      <div className="flex-1 bg-gray-100 p-4 overflow-auto"> {/* Content area */}
        {children}
      </div>
    </main>
  );
}
