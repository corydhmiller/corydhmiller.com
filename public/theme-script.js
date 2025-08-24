// Theme script - safe version without dangerouslySetInnerHTML
(function() {
  let theme = localStorage.theme;
  if (!theme) {
    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    localStorage.theme = theme;
  }
  document.documentElement.classList[theme === 'dark' ? 'add' : 'remove']('dark');
  document.documentElement.setAttribute('data-theme', theme);

  // Listen for storage changes
  window.addEventListener('storage', function(e) {
    if (e.key === 'theme') {
      const newTheme = e.newValue || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      document.documentElement.classList[newTheme === 'dark' ? 'add' : 'remove']('dark');
      document.documentElement.setAttribute('data-theme', newTheme);
    }
  });
})();