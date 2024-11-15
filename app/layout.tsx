import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Denis Jesus Palma Abanto | Real Estate Investor',
  description: 'Denis Palma Abanto is a leading real estate investor in Peru, specializing in residential and commercial property investments across Peru.',
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
    canonical: 'https://www.denis.pe',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.denis.pe',
    title: 'Denis Jesus Palma Abanto | Real Estate Investor',
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
    title: 'Denis Jesus Palma Abanto | Real Estate Investor',
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
        <link rel="canonical" href="https://www.denis.pe" />
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
              url: "https://www.denis.pe",
              sameAs: [
                "https://www.linkedin.com/in/denis-jesus-palma-abanto-512417336/",
                "https://www.instagram.com/denisj.palma/"
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
