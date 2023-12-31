"use client"
import './globals.css'
import type { Metadata } from 'next'
import { Mulish } from 'next/font/google'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import { ThemeProvider } from '@mui/material'
import theme from './theme'



const inter = Mulish({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Trafalgar',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body className={inter.className}>
          <NavBar />
          {children}
          <Footer />
        </body>
      </html>
    </ThemeProvider>
  )
}
