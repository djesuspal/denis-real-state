import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Denis Jesus Palma Abanto | Real Estate Investor Peru',
  description: 'Denis Palma Abanto is a leading real estate investor in Peru, specializing in residential and commercial property investments across growing Peruvian markets. Learn about investment opportunities and portfolio management.',
  keywords: [
    'Denis Jesus Palma Abanto',
    'Denis Palma Abanto',
    'Real Estate Investor Peru',
    'Peruvian Real Estate',
    'Property Investment Peru',
    'Commercial Real Estate Peru',
    'Real Estate Development Peru',
    'Property Management Peru'
  ],
  authors: [{ name: 'Denis Jesus Palma Abanto' }],
  creator: 'Denis Jesus Palma Abanto',
  publisher: 'Denis Jesus Palma Abanto',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: 'https://www.denispalma.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.denispalma.com',
    title: 'Denis Jesus Palma Abanto | Real Estate Investor Peru',
    description: 'Denis Palma Abanto is a leading real estate investor in Peru, specializing in residential and commercial property investments across growing markets.',
    siteName: 'Denis Jesus Palma Abanto Portfolio',
    images: [
      {
        url: '/images/profile.png',
        width: 1200,
        height: 630,
        alt: 'Denis Jesus Palma Abanto - Real Estate Investor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Denis Jesus Palma Abanto | Real Estate Investor Peru',
    description: 'Denis Palma Abanto is a leading real estate investor in Peru, specializing in residential and commercial property investments.',
    images: ['/images/profile.png'],
    creator: '@denispalma',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google verification code
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.denispalma.com" />
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Denis Jesus Palma Abanto",
              alternateName: "Denis Palma Abanto",
              jobTitle: "Real Estate Investor",
              url: "https://www.denispalma.com",
              sameAs: [
                "https://www.linkedin.com/in/denis-palma",
                "https://www.instagram.com/denis.palma"
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "Peru"
              },
              description: "Leading real estate investor in Peru specializing in residential and commercial property investments."
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
