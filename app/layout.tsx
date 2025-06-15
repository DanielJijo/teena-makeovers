import type { Metadata } from 'next'
import './globals.css'
import MouseTracker from './components/mouse-tracker'

export const metadata: Metadata = {
  title: 'Teena Makeovers',
  description: 'Created with v0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <MouseTracker />
      </body>
    </html>
  )
}
