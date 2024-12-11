export const themeScript = `
  (function() {
    let theme = localStorage.theme;
    if (!theme) {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      localStorage.theme = theme;
    }
    document.documentElement.classList[theme === 'dark' ? 'add' : 'remove']('dark');
  })();
` 