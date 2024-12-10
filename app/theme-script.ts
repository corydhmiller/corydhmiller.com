// This script runs before React hydration
export const themeScript = `
  function getThemePreference() {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function setTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    document.documentElement.setAttribute('data-theme', theme);
  }

  // Run as soon as possible to prevent flash
  setTheme(getThemePreference());

  // Re-run on storage change
  window.addEventListener('storage', (e) => {
    if (e.key === 'theme') {
      setTheme(e.newValue || getThemePreference());
    }
  });
` 