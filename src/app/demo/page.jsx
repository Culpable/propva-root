import { VideoHero } from '@/components/video-hero'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { ChevronRightIcon, EnvelopeIcon } from '@heroicons/react/16/solid'
import { pageMetadata } from '@/lib/metadata'

export const metadata = {
  title: pageMetadata.demo.title,
  description: pageMetadata.demo.description,
}

export default function DemoPage() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      
      <VideoHero
        videoId="VL4HTHX33Zs"
        title="Product Demo"
        subtitle="PropVA in 25 Seconds"
        description="See how PropVA simplifies property portfolio management in under 30 seconds."
        videoTitle="PropVA Platform Demo"
        videoThumbnail="/logos/PropVA-investment-property-demo.png"
        ctaButtons={[
          { 
            content: (
              <div className="inline-flex items-center gap-2">
                Get started for free
                <ChevronRightIcon className="h-4 w-4" />
              </div>
            ),
            href: 'https://app.propva.com.au/', 
            variant: 'primary' 
          },
          { 
            content: (
              <div className="inline-flex items-center gap-2">
                <EnvelopeIcon className="h-5 w-5" />
                Contact us
              </div>
            ),
            href: '/contact', 
            variant: 'secondary' 
          }
        ]}
      />
      
      <Footer />
    </main>
  )
}
