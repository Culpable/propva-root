'use client'

import { clsx } from 'clsx'
import { motion } from 'framer-motion'

export function Logo({ className, variant = 'navbar' }) {
  let transition = {
    duration: 0.5,
    ease: 'easeInOut',
  }

  return (
    <div className={clsx('flex items-center gap-2', className)}>
      <motion.img
        src="/propva.svg"
        alt="PropVA"
        width="34"
        height="34"
        className="h-9 w-9"
        variants={{
          idle: { scale: 1, opacity: 1 },
          active: {
            scale: [1, 1.15, 1],
            opacity: [1, 0.75, 1],
            transition: {
              ...transition,
              delay: 0,
            },
          },
        }}
        initial="idle"
        whileHover="active"
      />
      <span className="text-xl font-bold text-gray-950">PropVA</span>
    </div>
  )
}

export function Mark({ className }) {
  return (
    <img src="/propva.svg" alt="PropVA" className={className} />
  )
}
