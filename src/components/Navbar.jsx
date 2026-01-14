import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const handler = () => {
      const positions = links.map((l) => {
        const id = l.href.replace('#', '')
        const el = document.getElementById(id)
        if (!el) return { href: l.href, top: Infinity }
        const rect = el.getBoundingClientRect()
        return { href: l.href, top: Math.abs(rect.top - 100) }
      })
      positions.sort((a, b) => a.top - b.top)
      if (positions[0]) setActive(positions[0].href)
    }
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className="fixed top-0 inset-x-0 z-20 border-b border-neutral-200/70 dark:border-neutral-900/60 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 lg:px-16 h-16">
        <a href="#home" className="font-semibold tracking-tight text-neutral-900 dark:text-white">Gerald NEMEYIMANA</a>
        <div className="hidden md:flex items-center gap-3">
          <nav className="flex items-center gap-2 text-neutral-600 dark:text-neutral-200 relative">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`px-3 py-2 rounded-md transition-colors ${active === l.href ? 'text-neutral-900 dark:text-white' : 'hover:text-neutral-900 dark:hover:text-white'}`}
              >
                {l.label}
                {active === l.href && (
                  <motion.div
                    layoutId="active-link"
                    className="h-0.5 bg-cyan-500/80 rounded-full"
                    style={{ position: 'relative', top: 6 }}
                  />
                )}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
        <button aria-label="Open menu" className="md:hidden text-neutral-700 dark:text-neutral-200" onClick={() => setOpen((s) => !s)}>Menu</button>
      </div>
      {open && (
        <motion.nav initial={{ height: 0 }} animate={{ height: 'auto' }} className="md:hidden border-t border-neutral-200 dark:border-neutral-800">
          <div className="px-6 py-4 flex flex-col gap-3 bg-white/90 text-neutral-700 dark:bg-neutral-950/90 dark:text-neutral-200">
            {links.map((l) => {
              const isActive = active === l.href
              return (
                <a key={l.href} href={l.href} className={`${isActive ? 'text-neutral-900 dark:text-white' : ''}`} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              )
            })}
          </div>
        </motion.nav>
      )}
    </header>
  )
}
