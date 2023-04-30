import { useState, useEffect } from 'react';

// Added distance parameter to determine how much
// from the top tell return value is updated.
export const useHasScrolled = (distance: number) => {
  // setting initial value to false
  const [scroll, setScroll] = useState(false);
  // running on mount
  useEffect(() => {
    const onScroll = () => {
      // Logic is false tell user reaches threshold, then true after.
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      const scrollValuePerMil = Math.round(
        ((scrollTop + clientHeight) / scrollHeight) * 1000
      );

      const scrollCheckStart = scrollValuePerMil >= distance;

      if (scrollCheckStart !== scroll) setScroll(scrollCheckStart);
    };

    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [scroll, setScroll]);

  return scroll;
};
