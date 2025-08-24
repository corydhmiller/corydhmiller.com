/**
 * Unified Theme Management System
 * Handles both server-side initialization and client-side theme switching
 */

export type Theme = 'light' | 'dark'

/**
 * Get user's theme preference
 * Checks localStorage first, then system preference
 */
export function getThemePreference(): Theme {
  if (typeof window === 'undefined') return 'light' // SSR fallback
  
  if (typeof localStorage !== 'undefined' && localStorage.theme) {
    return localStorage.theme === 'dark' ? 'dark' : 'light'
  }
  
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

/**
 * Apply theme to DOM
 * Updates both class and data attribute for maximum compatibility
 */
export function applyTheme(theme: Theme): void {
  if (typeof document === 'undefined') return // SSR guard
  
  const root = document.documentElement
  
  if (theme === 'dark') {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
  
  root.setAttribute('data-theme', theme)
}

/**
 * Set theme preference
 * Updates localStorage and applies theme to DOM
 */
export function setTheme(theme: Theme): void {
  if (typeof localStorage !== 'undefined') {
    localStorage.theme = theme
  }
  applyTheme(theme)
}

/**
 * Toggle between light and dark themes
 */
export function toggleTheme(): Theme {
  const currentTheme = getThemePreference()
  const newTheme: Theme = currentTheme === 'dark' ? 'light' : 'dark'
  setTheme(newTheme)
  return newTheme
}

/**
 * Initialize theme system
 * Should be called on app startup
 */
export function initializeTheme(): void {
  const theme = getThemePreference()
  applyTheme(theme)
  
  // Listen for storage changes from other tabs
  if (typeof window !== 'undefined') {
    window.addEventListener('storage', (e) => {
      if (e.key === 'theme') {
        const newTheme = e.newValue === 'dark' ? 'dark' : 'light'
        applyTheme(newTheme)
      }
    })
  }
}