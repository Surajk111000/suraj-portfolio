import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/profile', label: 'Profile' },
  { to: '/education', label: 'Education' },
  { to: '/social', label: 'Social Media' },
  { to: '/projects', label: 'Projects' },
  { to: '/hobbies', label: 'Hobbies' },
  { to: '/achievements', label: 'Achievements & Competitions' }
]

function Navbar() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldUseDark = storedTheme ? storedTheme === 'dark' : prefersDark
    document.documentElement.classList.toggle('dark', shouldUseDark)
    setIsDark(shouldUseDark)
  }, [])

  const toggleTheme = () => {
    const nextMode = !isDark
    setIsDark(nextMode)
    document.documentElement.classList.toggle('dark', nextMode)
    localStorage.setItem('theme', nextMode ? 'dark' : 'light')
  }

  const navClass = ({ isActive }) =>
    `rounded-lg px-3 py-2 text-sm font-semibold transition ${
      isActive
        ? 'bg-brand-primary text-white dark:bg-brand-dark-primary'
        : 'text-brand-secondary hover:bg-indigo-100 dark:text-brand-dark-text dark:hover:bg-slate-700'
    }`

  return (
    <header className="sticky top-0 z-20 border-b border-indigo-100/70 bg-white/85 backdrop-blur dark:border-slate-700 dark:bg-brand-dark-bg/90">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 md:px-6">
        <h1 className="text-xl font-bold text-brand-primary dark:text-brand-dark-primary">Suraj Kumar</h1>
        <div className="flex items-center gap-2">
          <nav className="flex flex-wrap items-center gap-2">
          {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={navClass}>
              {item.label}
            </NavLink>
          ))}
          </nav>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-lg border border-indigo-200 p-2 text-brand-secondary transition hover:bg-indigo-100 dark:border-slate-600 dark:text-brand-dark-text dark:hover:bg-slate-700"
          >
            {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar