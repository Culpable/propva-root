'use client'

import { motion } from 'framer-motion'

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

function Marker({ src, top, offset, delay, backgroundColor, houseColor }) {
  return (
    <motion.div
      variants={{
        idle: { scale: 0, opacity: 0, rotateX: 0, rotate: 0, y: 0 },
        active: { y: [-20, 0, 4, 0], scale: [0.75, 1], opacity: [0, 1] },
      }}
      transition={{ duration: 0.25, delay, ease: 'easeOut' }}
      style={{ '--offset': `${offset}px`, top }}
      className="absolute left-[calc(50%+var(--offset))] size-[38px] drop-shadow-[0_3px_1px_rgba(0,0,0,.15)]"
    >
      <svg fill="none" viewBox="0 0 38 38" className="absolute size-full">
        <path
          d="M29.607 5.193c5.858 5.857 5.858 15.355 0 21.213l-9.9 9.9-.707.706-.708-.708-9.899-9.898c-5.857-5.858-5.857-15.356 0-21.213 5.858-5.858 15.356-5.858 21.214 0Z"
          className="fill-black/5"
        />
        <path
          d="m28.9 25.698-9.9 9.9-9.9-9.9C3.634 20.232 3.634 11.367 9.1 5.9 14.569.432 23.433.432 28.9 5.9c5.467 5.468 5.467 14.332 0 19.8Z"
          className="fill-white"
        />
      </svg>
      {/* Render SVG with custom colors if color props are provided, otherwise use img */}
      {backgroundColor || houseColor ? (
        <HouseSVG 
          backgroundColor={backgroundColor}
          houseColor={houseColor}
          className="absolute left-[7px] top-[4px] size-6 rounded-full"
        />
      ) : (
        <img
          alt=""
          src={src}
          className="absolute left-[7px] top-[4px] size-6 rounded-full"
        />
      )}
    </motion.div>
  )
}

export function Map() {
  return (
    <div aria-hidden="true" className="relative size-full">
      {/* Map background with brightness filter */}
      <div className="absolute inset-0 bg-[url(/map.png)] bg-[length:400px_336px] bg-[center_top_20px] bg-no-repeat [mask-image:linear-gradient(to_bottom,black_50%,transparent)] brightness-110" />
      {/* Optional: Add a subtle white overlay for more lightening */}
      <div className="absolute inset-0 bg-white/75" />
      <div className="absolute inset-0">
        {/* Perth - West coast */}
        {/* <Marker src="/map/house.png" top={185} offset={-180} delay={0.15} /> */}
        <Marker backgroundColor="#ea580c" top={185} offset={-180} delay={0.15} />
        
        {/* Brisbane - East coast */}
        {/* <Marker src="/map/house.png" top={150} offset={160} delay={0.3} /> */}
        <Marker backgroundColor="#14532d" top={150} offset={160} delay={0.3} />
        
        {/* Sydney - East coast */}
        {/* <Marker src="/map/house.png" top={210} offset={135} delay={0.5} /> */}
        <Marker backgroundColor="#d97706" top={210} offset={135} delay={0.5} />
        
        {/* Melbourne - Southeast corner */}
        {/* <Marker src="/map/house.png" top={245} offset={85} delay={0.7} /> */}
        <Marker backgroundColor="#172554" top={245} offset={85} delay={0.7} />
        
        {/* Adelaide - South central */}
        {/* <Marker src="/map/house.png" top={205} offset={20} delay={0.9} /> */}
        <Marker backgroundColor="#374151" top={205} offset={20} delay={0.9} />
      </div>
    </div>
  )
}
