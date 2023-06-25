import { useState, useEffect } from 'react';

function useScrollPosition() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const updateScroll = () => {
      if (window.scrollY >= 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener('scroll', updateScroll);

    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return { isScrolled };
}

export default useScrollPosition;