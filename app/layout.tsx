import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Devendra Dhande | Cloud & DevOps Engineer',
  description: 'Portfolio of Devendra Madhukar Dhande - MCA Graduate, AWS Certified Cloud Practitioner, Cloud Support & DevOps Engineer specializing in AWS, infrastructure management, and platform support.',
  keywords: 'Devendra Dhande, Cloud Support, DevOps Engineer, AWS, Infrastructure Support, System Engineer, Platform Support, Linux, CI/CD, Cloud Computing',
  authors: [{ name: 'Devendra Dhande' }],
  openGraph: {
    title: 'Devendra Dhande | Cloud & DevOps Engineer',
    description: 'AWS Certified Cloud Practitioner | Cloud Support & Infrastructure Engineer',
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
