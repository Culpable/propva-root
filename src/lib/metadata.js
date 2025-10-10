import { siteImages } from './images'

/**
 * Site-wide metadata configuration
 * This file defines metadata properties used across the site for SEO and social sharing
 */
export const siteMetadata = {
  title: 'PropVA: Simplify Your Property Investment Portfolio',
  description: 'Turn property documents into financial intelligence. PropVA uses AI to extract data from statements, calculate ROI, yields & tax for Australian investors.',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://propva.com.au',
  // Using the absolute URL directly from siteImages
  ogImage: siteImages.featured,
  twitter: {
    cardType: 'summary_large_image'
  }
} 