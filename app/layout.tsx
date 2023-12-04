import type { Metadata } from 'next'
import './globals.css'
import AuthOverlay from './components/AuthOverlay'
import UserProvider from './context/user'
import AllOverlays from './components/AllOverlay'


export const metadata: Metadata = {
  title: 'TikTok',
  description: 'TikTok',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
          <AllOverlays/>
          {children}  
        </body>
      </UserProvider>
    </html>
  )
}
