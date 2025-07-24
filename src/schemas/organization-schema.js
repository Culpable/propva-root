/**
 * Organization Schema.org JSON-LD markup
 * This file contains structured data that helps search engines understand the organisation
 */

export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PropVA",
    "alternateName": ["PropVA: AI-Powered Property Investment Portfolio Management"],
    "url": "https://propva.com.au/",
    "logo": "https://propva.com.au/logos/propva.png",
    "image": "https://propva.com.au/logos/propva-investment-property.png",
    "description": "Turn property documents into financial intelligence. PropVA uses AI to extract data from statements, calculate ROI, yields & tax for Australian investors.",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "PO Box 155",
        "addressLocality": "Northlands",
        "postOfficeBoxNumber": "155",
        "postalCode": "6905",
        "addressRegion": "WA",
        "addressCountry": "AU"
    }
}; 