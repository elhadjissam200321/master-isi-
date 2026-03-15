import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-merriweather',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Master ISI – Ingénierie des Systèmes Intelligents | FSAC',
  description:
    'Master en Ingénierie des Systèmes Intelligents – Faculté des Sciences Aïn Chock, Université Hassan II de Casablanca. Formation en Intelligence Artificielle, Machine Learning et Data Science.',
  keywords: ['Master ISI', 'Intelligence Artificielle', 'Machine Learning', 'Data Science', 'FSAC', 'Université Hassan II', 'Casablanca'],
  authors: [{ name: 'FSAC – Faculté des Sciences Aïn Chock' }],
  openGraph: {
    title: 'Master ISI – Ingénierie des Systèmes Intelligents',
    description: 'Formation d\'excellence en IA et Systèmes Intelligents à la FSAC, Université Hassan II de Casablanca.',
    type: 'website',
    locale: 'fr_MA',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${merriweather.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
