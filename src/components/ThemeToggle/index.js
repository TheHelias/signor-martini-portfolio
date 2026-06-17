import React, { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

const getInitialTheme = () => {
  if (typeof document === 'undefined') return 'light'
  return document.documentElement.getAttribute('data-theme') || 'light'
}

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setTheme(getInitialTheme())
    setMounted(true)

    // Follow the OS setting only while the user hasn't made an explicit choice.
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onSystemChange = (e) => {
      if (!localStorage.getItem('theme')) {
        const next = e.matches ? 'dark' : 'light'
        document.documentElement.setAttribute('data-theme', next)
        setTheme(next)
      }
    }
    // Keep tabs in sync when the choice changes elsewhere.
    const onStorage = (e) => {
      if (e.key === 'theme' && e.newValue) {
        document.documentElement.setAttribute('data-theme', e.newValue)
        setTheme(e.newValue)
      }
    }

    media.addEventListener('change', onSystemChange)
    window.addEventListener('storage', onStorage)
    return () => {
      media.removeEventListener('change', onSystemChange)
      window.removeEventListener('storage', onStorage)
    }
  }, [])

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    try {
      localStorage.setItem('theme', next)
    } catch (e) {}
    setTheme(next)
  }

  const isDark = theme === 'dark'

  return (
    <button
      type='button'
      className='theme-toggle'
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {mounted ? (isDark ? <FaSun /> : <FaMoon />) : null}
    </button>
  )
}

export default ThemeToggle
