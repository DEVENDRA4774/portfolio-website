import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Devendra Dhande | Software Developer Portfolio',
  description: 'Portfolio of Devendra Madhukar Dhande - MCA Graduate, AWS Certified Cloud Practitioner, Full Stack Developer',
  keywords: 'Devendra Dhande, Software Developer, Full Stack Developer, Java, Python, AWS, Flutter, Web Development',
  authors: [{ name: 'Devendra Dhande' }],
  openGraph: {
    title: 'Devendra Dhande | Software Developer Portfolio',
    description: 'Portfolio of Devendra Madhukar Dhande - MCA Graduate, AWS Certified Cloud Practitioner',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
