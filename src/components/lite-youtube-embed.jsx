'use client'

import { useEffect, useRef, useState } from 'react'
import analytics from '@/lib/analytics'

/**
 * LiteYouTubeEmbed Component
 * 
 * A performant YouTube video embed component that lazy-loads the iframe.
 * Uses the lite-youtube-embed package for optimal performance and user experience.
 * 
 * Props:
 *   - videoid: YouTube video ID (required)
 *   - title: Video title for accessibility
 *   - playlabel: Accessible label for play button
 *   - params: YouTube player URL parameters
 *   - jsApi: Enable YouTube IFrame Player API
 *   - className: Additional CSS classes
 *   - style: Inline styles object
 */
export default function LiteYouTubeEmbed({ 
  videoid, 
  title = '', 
  playlabel = '',
  params = '',
  jsApi = false,
  className = '',
  style = {},
  ...props 
}) {
  // Track loading state and script initialization
  const [isLoaded, setIsLoaded] = useState(false)
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const containerRef = useRef(null)
  const hasTrackedPlayRef = useRef(false)

  // Defer script loading until component mounts for progressive enhancement
  useEffect(() => {
    const timer = setTimeout(() => {
      setScriptLoaded(true)
    }, 100) // Small delay ensures critical content loads first
    
    return () => clearTimeout(timer)
  }, [])

  // Dynamically import the lite-youtube-embed script when ready
  useEffect(() => {
    if (scriptLoaded && containerRef.current && !isLoaded) {
      const loadScript = async () => {
        try {
          await import('lite-youtube-embed/src/lite-yt-embed.js')
          setIsLoaded(true)
        } catch (error) {
          console.error('Failed to load lite-youtube-embed:', error)
        }
      }
      loadScript()
    }
  }, [scriptLoaded, isLoaded])

  // Create the custom lite-youtube element once script is loaded
  useEffect(() => {
    if (isLoaded && containerRef.current) {
      const existingElement = containerRef.current.querySelector('lite-youtube')
      if (!existingElement) {
        const liteYoutube = document.createElement('lite-youtube')
        
        // Set core attributes for video player
        liteYoutube.setAttribute('videoid', videoid)
        
        // Set title for overlay text
        if (title) {
          liteYoutube.setAttribute('title', title)
        }
        
        // Set custom play label for screen readers
        liteYoutube.setAttribute('playlabel', playlabel || `Play Video: ${title}` || 'Play Video')
        
        // Configure player parameters for optimal user experience
        const defaultParams = 'modestbranding=1&rel=0&start=0'
        const finalParams = params ? `${defaultParams}&${params}` : defaultParams
        liteYoutube.setAttribute('params', finalParams)
        
        // Enable YouTube IFrame Player API if requested
        if (jsApi) {
          liteYoutube.setAttribute('js-api', '')
        }
        
        // Apply minimal styling to ensure proper display
        liteYoutube.style.cssText = `
          width: 100%;
          height: 100%;
          ${style.backgroundImage ? `background-image: ${style.backgroundImage};` : ''}
        `
        
        // Track video play events (once per component lifecycle)
        liteYoutube.addEventListener('pointerdown', () => {
          if (!hasTrackedPlayRef.current) {
            hasTrackedPlayRef.current = true
            // Track video play with contextual properties
            analytics.trackVideoPlay(videoid, {
              title: title || undefined,
              provider: 'youtube',
              location: typeof window !== 'undefined' ? window.location.pathname : undefined,
              page: typeof window !== 'undefined' ? window.location.pathname : undefined,
              component: 'LiteYouTubeEmbed',
              source: 'demo_page'
            })
          }
        }, { once: true })

        containerRef.current.appendChild(liteYoutube)
      }
    }
  }, [isLoaded, videoid, title, playlabel, params, jsApi, style.backgroundImage])

  // Method to get YouTube Player API instance (if js-api is enabled)
  const getYTPlayer = async () => {
    if (!jsApi || !isLoaded) {
      throw new Error('YouTube Player API not enabled. Set jsApi={true} to use this feature.')
    }
    
    const liteYoutube = containerRef.current?.querySelector('lite-youtube')
    if (liteYoutube && typeof liteYoutube.getYTPlayer === 'function') {
      return await liteYoutube.getYTPlayer()
    }
    
    throw new Error('YouTube Player not ready')
  }

  // Expose getYTPlayer method via ref for external control
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.getYTPlayer = getYTPlayer
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded, jsApi])

  return (
    <>
      {/* Load CSS stylesheet for the video player */}
      {/* eslint-disable-next-line @next/next/no-css-tags */}
      <link 
        rel="stylesheet" 
        href="/lite-youtube-embed.css" 
      />
      
      {/* Container with fallback markup for progressive enhancement */}
      <div 
        ref={containerRef} 
        className={`relative w-full h-full ${className}`}
        style={style}
        {...props}
      >
        {/* Display loading fallback before script loads */}
        {!isLoaded && (
          <div className={`absolute inset-0 flex flex-col items-center justify-center text-white ${scriptLoaded ? 'lite-youtube-loading' : 'bg-gray-900'}`}>
            <button 
              type="button"
              className="group flex flex-col items-center justify-center text-center p-8 hover:bg-gray-800/50 transition-colors rounded-lg z-10 cursor-default"
              aria-label={playlabel || `Play Video: ${title}` || 'Play Video'}
              disabled
            >
              {/* YouTube-style play button icon */}
              <div className="w-16 h-16 flex items-center justify-center bg-red-600 rounded-full mb-4 group-hover:bg-red-700 transition-colors">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              {/* Display video title if provided */}
              {title && (
                <h3 className="text-lg font-medium mb-2 group-hover:text-gray-100">
                  {title}
                </h3>
              )}
              {/* Show loading status */}
              <span className="text-sm text-gray-400 group-hover:text-gray-300">
                {scriptLoaded ? 'Loading video player…' : 'Preparing player…'}
              </span>
            </button>
          </div>
        )}
      </div>
    </>
  )
}

