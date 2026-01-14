import { useEffect, useState } from 'react'

function getPreferredTheme() {
  if (typeof window === 'undefined') return 'dark'
  const stored = localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getPreferredTheme)

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-neutral-800 bg-neutral-900/60 text-neutral-200 hover:border-neutral-700 hover:bg-neutral-900"
      onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
      title="Toggle theme"
    >
      {theme === 'dark' ? (
        // Sun icon
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 4a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm0-18a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm10 7h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2ZM3 12H2a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Zm15.364 7.364a1 1 0 0 1-1.414 0l-.707-.707a1 1 0 1 1 1.414-1.414l.707.707a1 1 0 0 1 0 1.414ZM7.757 6.343a1 1 0 0 1-1.414 0l-.707-.707A1 1 0 1 1 7.05 4.222l.707.707a1 1 0 0 1 0 1.414Zm10.607-1.414a1 1 0 0 1 0 1.414l-.707.707A1 1 0 1 1 16.243 5.95l.707-.707a1 1 0 0 1 1.414 0ZM6.343 16.243a1 1 0 0 1 0 1.414l-.707.707A1 1 0 1 1 4.222 16.95l.707-.707a1 1 0 0 1 1.414 0Z"/>
        </svg>
      ) : (
        // Moon icon
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"/>
        </svg>
      )}
    </button>
  )
}
