import { useState, useEffect } from 'react';

const GalleryKeyboardHint = () => {
  const [hasKeyboard, setHasKeyboard] = useState(false);

  useEffect(() => {
    const checkKeyboard = () => {
      setHasKeyboard(
        !('ontouchstart' in window) || 
        navigator.maxTouchPoints === 0
      );
    };
    
    checkKeyboard();
    window.addEventListener('resize', checkKeyboard);
    return () => window.removeEventListener('resize', checkKeyboard);
  }, []);

  if (!hasKeyboard) return null;

  return (
    <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
      Use arrow keys to navigate the gallery
    </div>
  );
}; 