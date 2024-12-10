// This code runs before React hydration
const colorSchemeScript = `
  let darkModePreference = window.localStorage.getItem('theme');
  
  if (!darkModePreference) {
    darkModePreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  if (darkModePreference === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
`

export const darkModeInitScript = `
  (function() {
    function getThemePreference() {
      if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
        return localStorage.getItem('theme');
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function updateTheme() {
      const theme = getThemePreference();
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    }

    // Run as soon as possible
    updateTheme();

    // Re-run on document load to ensure consistency
    document.addEventListener('DOMContentLoaded', updateTheme);
  })();
` 