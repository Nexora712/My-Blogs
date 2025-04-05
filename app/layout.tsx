import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins, Montserrat, Source_Code_Pro } from 'next/font/google'

const inter = Inter({
  weight: ['700'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap'
})

const montserrat = Montserrat({ 
  weight: ['600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap'
})

const sourceCodePro = Source_Code_Pro({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-source-code-pro',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Achyut\'s Blog',
  description: 'Personal blog with email subscription',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${montserrat.variable} ${sourceCodePro.variable} ${inter.variable} bg-gray-50`} style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
        <div className="py-8 px-4">
          <div className="container max-w-6xl mx-auto">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
} 