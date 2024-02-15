import type { Metadata, Viewport } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'

const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vu Hoang Trung - Web Developer',
  description:
    "Vu Hoang Trung - Web Developer with expertise in creating engaging and user-friendly websites. Specializing in front-end and back-end development, I bring creative solutions to life with a keen eye for design.",
  generator: 'Next.js',
  applicationName: 'Dev Portfolio',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Next.js',
    'React.js',
    'Web Development',
    'JavaScript',
    'Front-end',
    'Full Stack',
    'UI/UX Design',
    'Responsive Web Design',
    'Creative Developer',
    'HTML5 CSS3',
    'Mobile-First Development',
    'API Integration',
    'Performance Optimization'
  ],
  authors: [{ name: 'Vu Hoang Trung' }, { name: 'Vu Hoang Trung', url: 'https://yakshit.co' }],
  creator: 'Vu Hoang Trung',
  publisher: 'Vu Hoang Trung',
  metadataBase: new URL('https://yakshit.co'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE'
    }
  },
  openGraph: {
    images: 'https://raw.githubusercontent.com/YAKSHIT-22/Ogtag-Photos/main/Screenshot%202023-12-19%20001527.png'
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  icons: {
    icon: '/icon.png'
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${urbanist.className} bg-third`}>{children}</body>
    </html>
  )
}
