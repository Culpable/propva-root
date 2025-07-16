/**
 * Site-wide image configuration
 * This file contains paths to important site images used across the application
 */

export const siteImages = {
  // Featured image path for Open Graph and social sharing
  // Using the absolute URL for consistency with organization schema
  featured: 'https://propva.com.au/logos/propva-investment-property.png',
} as const

export type SiteImages = typeof siteImages 