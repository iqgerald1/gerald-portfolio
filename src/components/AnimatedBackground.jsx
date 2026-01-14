import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function AnimatedBackground() {
  const [scrollY, setScrollY] = useState(0)
  const [angle, setAngle] = useState(30) // base angle in degrees

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || 0)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const parallax = (scrollY * 0.12).toFixed(2)
  const hoverAngle = angle

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      onMouseEnter={() => setAngle(32)}
      onMouseLeave={() => setAngle(30)}
    >
      {/* Base canvas (light uses bright canvas, dark uses deep canvas) */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white dark:from-neutral-900/20 dark:via-neutral-950 dark:to-black" />

      {/* Paramount mesh for light mode: layered radial gradients + angled highlight */}
      <div className="absolute inset-0 block dark:hidden">
        {/* Cyan mesh blob */}
        <motion.div
          initial={{ opacity: 0.0, scale: 0.95 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute -top-48 left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(closest-side, rgba(6,182,212,0.20), transparent 70%)' }}
        />
        {/* Blue mesh blob */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: -10, opacity: 0.45 }}
          transition={{ duration: 2.2, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute top-[30%] -left-24 h-[520px] w-[520px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(closest-side, rgba(37,99,235,0.18), transparent 70%)' }}
        />
        {/* Purple tint for depth */}
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 16, opacity: 0.25 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bottom-0 right-[-80px] h-[460px] w-[460px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(closest-side, rgba(147,51,234,0.14), transparent 70%)' }}
        />
        {/* Angled highlight ribbon */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 0.5 }}
          transition={{ duration: 1.4 }}
          className="absolute -top-24 -right-32 h-[220px] w-[1200px] rotate-[-12deg]"
          style={{
            background: 'linear-gradient(90deg, rgba(6,182,212,0.12), rgba(59,130,246,0.10), rgba(255,255,255,0))',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
            maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)'
          }}
        />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.05] dark:opacity-[0.08] mix-blend-multiply"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(2,6,23,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(2,6,23,0.08) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Zebra stripe overlay (light and dark tuned) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.16] dark:hidden"
        style={{
          backgroundImage: `repeating-linear-gradient(${hoverAngle}deg, rgba(79,70,229,0.15) 0px, rgba(79,70,229,0.15) 8px, transparent 8px, transparent 16px)`,
          transform: `translateY(${parallax}px)`,
          willChange: 'transform',
          transition: 'background-image 200ms ease'
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none hidden dark:block opacity-[0.12]"
        style={{
          backgroundImage: `repeating-linear-gradient(${hoverAngle}deg, rgba(255,255,255,0.12) 0px, rgba(255,255,255,0.12) 8px, transparent 8px, transparent 16px)`,
          transform: `translateY(${parallax}px)`,
          willChange: 'transform',
          transition: 'background-image 200ms ease'
        }}
      />

      {/* Animated blobs (dark mode only) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.8, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full blur-3xl hidden dark:block"
        style={{ background: 'radial-gradient(closest-side, rgba(6,182,212,0.22), transparent 70%)' }}
      />
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: -30, opacity: 0.5 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute top-40 -left-20 h-80 w-80 rounded-full blur-2xl hidden dark:block"
        style={{ background: 'radial-gradient(closest-side, rgba(59,130,246,0.18), transparent 70%)' }}
      />
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 20, opacity: 0.5 }}
        transition={{ duration: 7, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-10 -right-10 h-64 w-64 rounded-full blur-2xl hidden dark:block"
        style={{ background: 'radial-gradient(closest-side, rgba(6,182,212,0.2), transparent 70%)' }}
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cyan-500/10 to-transparent" />
    </div>
  )
}
