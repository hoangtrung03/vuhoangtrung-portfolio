import Footer from '@/components/Footer'
import Header from '@/components/Header'
import type { Metadata, Viewport } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'

const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vu Hoang Trung - Web Developer',
  description:
    'Vu Hoang Trung - Web Developer with expertise in creating engaging and user-friendly websites. Specializing in front-end and back-end development, I bring creative solutions to life with a keen eye for design.',
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
    'Responsive Web Design',
    'HTML5 CSS3',
    'Mobile-First Development',
    'API Integration',
    'Performance Optimization'
  ],
  authors: [{ name: 'Vu Hoang Trung' }, { name: 'Vu Hoang Trung', url: 'https://vuhoangtrungportfolio.vercel.app/' }],
  creator: 'Vu Hoang Trung',
  publisher: 'Vu Hoang Trung',
  metadataBase: new URL('https://vuhoangtrungportfolio.vercel.app/'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE'
    }
  },
  openGraph: {
    images: 'https://ik.imagekit.io/fh01eqtgh/hoangtrung-portfolio.PNG?updatedAt=1708144708202'
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
  maximumScale: 5,
  userScalable: true
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${urbanist.className} bg-third`}>
        {/* <AnimatedCursor
          innerSize={8}
          outerSize={20}
          color='256, 256, 256'
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={2.5}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link'
          ]}
        /> */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
