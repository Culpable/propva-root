'use client'

import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import { Mark } from './logo'

// Inline SVG component that accepts color props
function HouseSVG({ backgroundColor = '#18181b', houseColor = '#fff', className = '' }) {
  return (
    <svg
      height="24"
      viewBox="0 0 512 512"
      width="24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <g>
          <circle
            cx="256"
            cy="256"
            fill={backgroundColor}
            r="256"
          />
          <path
            d="m385.32 277c-5.77 4-12.05 5-19 4.66-.08 28.82.24 57.06-.18 85.78-.3 15.29-13.33 28.14-28.65 28.43s-30.71.13-46.06.07c-4.95 0-8.19-3.58-8.21-8.8-.05-13 0-25.93 0-38.9 0-8.54 0-17.09 0-25.64 0-8.82-5.61-14.45-14.5-14.56q-12.54-.13-25.1 0c-8.68.1-14.27 5.77-14.28 14.48-.05 21.14 0 42.29-.05 63.44 0 7.07-3 10-10.08 10q-20.82 0-41.65 0c-18.3 0-31.3-12.88-31.37-31.21-.1-27.69 0-55.39-.06-83.09-25.35 2.43-40.15-26.13-22-44.59q56.24-56.28 112.57-112.5a32.68 32.68 0 0 1 8.06-6.11c8.74-4.37 22.39-3 30.7 5.51 21.05 21.6 42.56 42.74 63.89 64.06 16.38 16.38 32.62 32.92 49.2 49.1 10.9 10.67 9.88 31.15-3.23 39.87z"
            fill={houseColor}
          />
        </g>
      </g>
    </svg>
  )
}

function Circle({ size, delay, opacity }) {
  return (
    <motion.div
      variants={{
        idle: { width: `${size}px`, height: `${size}px` },
        active: {
          width: [`${size}px`, `${size + 10}px`, `${size}px`],
          height: [`${size}px`, `${size + 10}px`, `${size}px`],
          transition: {
            duration: 0.75,
            repeat: Infinity,
            repeatDelay: 1.25,
            ease: 'easeInOut',
            delay,
          },
        },
      }}
      style={{ '--opacity': opacity }}
      className={clsx(
        'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full',
        'bg-[radial-gradient(circle,transparent_25%,color-mix(in_srgb,_theme(colors.blue.500)_var(--opacity),transparent)_100%)]',
        'ring-1 ring-inset ring-blue-500/[8%]',
      )}
    />
  )
}

function Circles() {
  return (
    <div className="absolute inset-0">
      <Circle size={528} opacity="3%" delay={0.45} />
      <Circle size={400} opacity="5%" delay={0.3} />
      <Circle size={272} opacity="5%" delay={0.15} />
      <Circle size={144} opacity="10%" delay={0} />
      <div className="absolute inset-0 bg-gradient-to-t from-white to-35%" />
    </div>
  )
}

function MainLogo() {
  return (
    <div className="absolute left-44 top-32 flex size-16 items-center justify-center rounded-full bg-white shadow ring-1 ring-black/5">
      <Mark className="h-14 fill-black" />
    </div>
  )
}

function Logo({ src, left, top, hover, size = 14, backgroundColor, houseColor }) {
  return (
    <motion.div
      variants={{
        idle: { x: 0, y: 0, rotate: 0 },
        active: {
          x: [0, hover.x, 0],
          y: [0, hover.y, 0],
          rotate: [0, hover.rotate, 0],
          transition: {
            duration: 0.75,
            repeat: Infinity,
            repeatDelay: 1.25,
            ease: 'easeInOut',
            delay: hover.delay,
          },
        },
      }}
      style={{ left, top }}
      className="absolute size-16 flex items-center justify-center rounded-full bg-white shadow ring-1 ring-black/5"
    >
      {/* Render SVG with custom colors if color props are provided, otherwise use img */}
      {backgroundColor || houseColor ? (
        <HouseSVG 
          backgroundColor={backgroundColor}
          houseColor={houseColor}
          className={clsx(`size-${size}`, 'object-contain')}
        />
      ) : (
        <img 
          src={src} 
          alt="" 
          className={clsx(
            `size-${size}`,
            'object-contain'
          )}
        />
      )}
    </motion.div>
  )
}

export function LogoCluster() {
  return (
    <div aria-hidden="true" className="relative h-full overflow-hidden">
      <Circles />
      <div className="absolute left-1/2 h-full w-[26rem] -translate-x-1/2">
        <MainLogo />
        {/* Darwin - North central */}
        <Logo
          backgroundColor="#581c87"
          houseColor="#ffffff"
          left={120}
          top={15}
          hover={{ x: 2, y: -3, rotate: 4, delay: 0.1 }}
          size={12}
        />
        {/* Perth - Far west */}
        <Logo
          backgroundColor="#ea580c"
          houseColor="#ffffff"
          left={45}
          top={175}
          hover={{ x: -6, y: 2, rotate: -8, delay: 0.15 }}
          size={12}
        />
        {/* Brisbane - Northeast */}
        <Logo
          backgroundColor="#14532d"
          houseColor="#ffffff"
          left={340}
          top={95}
          hover={{ x: 5, y: -2, rotate: 6, delay: 0.3 }}
          size={12}
        />
        {/* Sydney - East coast */}
        <Logo
          backgroundColor="#d97706"
          houseColor="#ffffff"
          left={315}
          top={165}
          hover={{ x: 4, y: 3, rotate: 5, delay: 0.5 }}
          size={12}
        />
        {/* Melbourne - Southeast */}
        <Logo
          backgroundColor="#172554"
          houseColor="#ffffff"
          left={265}
          top={225}
          hover={{ x: 3, y: 4, rotate: -4, delay: 0.7 }}
          size={12}
        />
        {/* Adelaide - South central */}
        <Logo
          backgroundColor="#374151"
          houseColor="#ffffff"
          left={165}
          top={200}
          hover={{ x: -2, y: 4, rotate: 3, delay: 0.9 }}
          size={12}
        />
      </div>
    </div>
  )
}
