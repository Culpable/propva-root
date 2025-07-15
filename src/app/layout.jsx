import '@/styles/tailwind.css'
import localFont from 'next/font/local'
import Script from 'next/script'
import { googleAdsScript } from '@/scripts/google-ads'
import { linkedinTrackingScript } from '@/scripts/linkedin-tracking'
import MixpanelProvider from '@/components/MixpanelProvider'

// Load Switzer font files locally for optimal performance
const switzer = localFont({
  src: [
    {
      path: '../fonts/Switzer-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Switzer-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Switzer-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Switzer-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../fonts/Switzer-MediumItalic.woff',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../fonts/Switzer-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../fonts/Switzer-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/Switzer-Semibold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/Switzer-Semibold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/Switzer-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/Switzer-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/Switzer-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap', // Use 'swap' to prevent render blocking
  variable: '--font-switzer', // CSS variable for the font
  preload: true,
  fallback: ['system-ui', 'sans-serif'], // System fallback fonts
})

export const metadata = {
  title: {
    template: '%s | propva',
    default: 'Propva: Simplify Your Property Investment Portfolio',
  },
  description:
    'Turn property documents into financial intelligence. Propva uses AI to extract data from statements, calculate ROI, yields & tax for Australian investors.',
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon', sizes: '32x32' },
      { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
    manifest: '/site.webmanifest',
  },
  additionalMetaTags: [
    {
      name: 'msapplication-TileColor',
      content: '#ffffff',
    },
    {
      name: 'msapplication-config',
      content: '/browserconfig.xml',
    },
  ],
}

export const viewport = {
  themeColor: '#ffffff',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={switzer.variable}>
      {/* Google Ads tracking script */}
      <Script
        id="google-ads-tag"
        src={googleAdsScript.src}
        strategy="afterInteractive"
      />
      <Script
        id="google-ads-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: googleAdsScript.configScript
        }}
      />
      
      {/* LinkedIn tracking script */}
      <Script
        id="linkedin-tracking"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: linkedinTrackingScript.script
        }}
      />
      
      <body className="text-gray-950 antialiased" suppressHydrationWarning>
        <MixpanelProvider />
        {children}
        
        {/* LinkedIn fallback for users with JavaScript disabled */}
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }} 
            alt="" 
            src={linkedinTrackingScript.noscriptImg} 
          />
        </noscript>
      </body>
    </html>
  )
}
