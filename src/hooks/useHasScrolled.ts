import { useState, useEffect } from "react";

export const useHasScrolled = (distance: number) => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      const scrollValuePerMil = Math.round(
        ((scrollTop + clientHeight) / scrollHeight) * 1000
      );

      const scrollCheckStart = scrollValuePerMil >= distance;

      if (scrollCheckStart !== isScroll) setIsScroll(scrollCheckStart);
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
    //eslint-disable-next-line
  }, [isScroll, distance]);

  return isScroll;
};
