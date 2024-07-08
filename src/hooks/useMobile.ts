import { useEffect, useState } from "react";

const RESOLUTION = 1440;

export const useMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < RESOLUTION);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < RESOLUTION);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};
