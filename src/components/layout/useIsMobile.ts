import { useEffect, useState } from 'react';

// Returns true if the screen width is less than or equal to 599px (mobile breakpoint)
export function useIsMobile(breakpoint = 599) {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia(`(max-width: ${breakpoint}px)`).matches
      : false
  );

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const listener = () => setIsMobile(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [breakpoint]);

  return isMobile;
}
