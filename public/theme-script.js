// Minimal theme initialization script - runs before React hydration
(function() {
  function getTheme() {
    if (localStorage.theme) return localStorage.theme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  
  function applyTheme(theme) {
    document.documentElement.classList[theme === 'dark' ? 'add' : 'remove']('dark');
    document.documentElement.setAttribute('data-theme', theme);
  }
  
  // Initialize theme immediately to prevent flash
  const theme = getTheme();
  localStorage.theme = theme; // Ensure it's persisted
  applyTheme(theme);
  
  // Listen for changes from other tabs
  window.addEventListener('storage', function(e) {
    if (e.key === 'theme') {
      applyTheme(e.newValue || getTheme());
    }
  });
})();