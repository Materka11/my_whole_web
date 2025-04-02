import { useCallback } from "react";

export const useScrollTo = () => {
  const scrollToComponent = useCallback(
    ({
      elementId,
      vh,
      px = 0,
    }: {
      elementId?: string;
      vh?: number;
      px?: number;
    }) => {
      if (elementId) {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else if (typeof vh === "number") {
        window.scrollTo({
          top: window.innerHeight * vh + px,
          behavior: "smooth",
        });
      }
    },
    []
  );

  return scrollToComponent;
};
