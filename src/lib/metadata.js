import { siteImages } from './images'

/**
 * Site-wide metadata configuration
 * This file defines metadata properties used across the site for SEO and social sharing
 */
export const siteMetadata = {
  name: 'PropVA',
  title: 'PropVA: Simplify Your Property Investment Portfolio',
  description: 'Turn property documents into financial intelligence. PropVA uses AI to extract data from statements, calculate ROI, yields & tax for Australian investors.',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://propva.com.au',
  // Using the absolute URL directly from siteImages
  ogImage: siteImages.featured,
  twitter: {
    cardType: 'summary_large_image'
  },
  locale: 'en-AU',
}

export const pageMetadata = {
  home: {
    title: siteMetadata.title,
    description: siteMetadata.description,
  },
  pricing: {
    title: 'Pricing',
    description:
      'Property investors across Australia use PropVA to manage their portfolios with crystal-clear financial intelligence. Login today.',
  },
  contact: {
    title: 'Contact Us',
    description:
      'Ready to simplify your property portfolio management? Contact us to see how PropVA turns document chaos into financial clarity.',
  },
  demo: {
    title: 'Demo',
    description:
      'Watch PropVA in action. See how we simplify property portfolio management with our intuitive platform.',
  },
  login: {
    title: 'Login',
    description: 'Sign in to your account to continue.',
  },
  privacyPolicy: {
    title: 'Privacy Policy',
    description:
      'Learn how PropVA protects your privacy and handles your property investment data. We never sell your financial information.',
  },
}
