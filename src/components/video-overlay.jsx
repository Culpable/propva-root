'use client'

import { useState } from 'react'
import { Button } from './button'
import { PlayCircleIcon } from '@heroicons/react/16/solid'
import { XMarkIcon } from '@heroicons/react/24/outline'

export function VideoOverlay({ videoId = 'VL4HTHX33Zs', className = '' }) {
  const [isOpen, setIsOpen] = useState(false)

  const openVideo = () => setIsOpen(true)
  const closeVideo = () => setIsOpen(false)

  return (
    <>
      <Button 
        variant="secondary" 
        onClick={openVideo}
        className={`inline-flex items-center gap-2 ${className}`}
      >
        <PlayCircleIcon className="h-5 w-5" />
        Watch the demo
        <span className="text-gray-500">25s</span>
      </Button>

      {/* Video Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-4xl">
            {/* Close Button */}
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 z-10 rounded-full bg-white/20 p-2 text-white hover:bg-white/30 transition-colors"
              aria-label="Close video"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
            
            {/* Video Container */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 h-full w-full rounded-lg"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title="Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
