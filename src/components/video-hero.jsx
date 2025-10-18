'use client'

import { Container } from '@/components/container'
import { Navbar } from '@/components/navbar'
import { Button } from '@/components/button'
import { Subheading } from '@/components/text'
import { Gradient } from '@/components/gradient'
import LiteYouTubeEmbed from '@/components/lite-youtube-embed'

/**
 * VideoHero Component
 * 
 * A hero section that showcases a YouTube video with supporting content.
 * Includes a title, description, video player, and call-to-action buttons.
 * 
 * Props:
 *   - videoId: YouTube video ID (required)
 *   - title: Hero section title/subheading
 *   - subtitle: Main heading text
 *   - description: Supporting paragraph text
 *   - videoTitle: Title shown on video player
 *   - videoThumbnail: Background image URL for video
 *   - ctaButtons: Array of button objects { text, href, variant, content (optional JSX) }
 */
export function VideoHero({
  videoId,
  title = 'Product Tour',
  subtitle = 'Experience our platform in action',
  description = 'Watch how our solution transforms your workflow',
  videoTitle = 'Demo Video',
  videoThumbnail = '',
  ctaButtons = [
    { text: 'Book a demo', href: '/contact', variant: 'primary' }
  ]
}) {
  return (
    <div className="relative">
      {/* Gradient background that seamlessly blends with navbar */}
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
      
      <Container className="relative">
        {/* Navigation bar */}
        <Navbar />
        
        {/* Hero content section */}
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
          {/* Text content centered above video */}
          <div className="text-center">
            <Subheading>{title.toUpperCase()}</Subheading>
            <h1 className="mt-2 font-display text-balance text-5xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-7xl/[0.8] md:text-7xl/[0.8]">
              {subtitle}
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
              {description}
            </p>
          </div>

          {/* Video Player Section */}
          <div className="mt-16 relative">
            <div className="mx-auto max-w-6xl">
              <div className="relative overflow-hidden rounded-2xl bg-gray-900 shadow-2xl">
                {/* 16:9 aspect ratio container for video */}
                <div className="aspect-video w-full">
                  <LiteYouTubeEmbed 
                    videoid={videoId}
                    title={videoTitle}
                    playlabel={`Play demonstration video: ${videoTitle}`}
                    params="controls=1&enablejsapi=1"
                    jsApi={true}
                    style={videoThumbnail ? { backgroundImage: `url(${videoThumbnail})` } : {}}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row sm:justify-center">
            {ctaButtons.map((btn, idx) => (
              <Button 
                key={idx}
                href={btn.href} 
                variant={btn.variant}
                className="w-full sm:w-auto"
              >
                {/* Use custom content if provided, otherwise use text */}
                {btn.content || btn.text}
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default VideoHero