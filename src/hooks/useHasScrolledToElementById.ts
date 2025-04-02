import { useState, useEffect } from "react";

export const useHasScrolledToElementById = (
  distance: number,
  elementId: string
) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const element = document.getElementById(elementId);
      if (!element) return;

      const rect = element.getBoundingClientRect();

      const elementTop = rect.top + window.scrollY;

      const scrollPosition = window.scrollY;

      if (scrollPosition >= elementTop - distance && !hasScrolled) {
        setHasScrolled(true);
      } else if (scrollPosition < elementTop - distance && hasScrolled) {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [distance, elementId, hasScrolled]);

  return hasScrolled;
};
