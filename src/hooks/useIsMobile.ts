import { useState, useEffect } from "react";

interface Size {
  width: number | undefined;
  height: number | undefined;
}

const  screens = {
    sm: 640,
    md: 768,
  }

export const useIsMobile = () => {
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (windowSize.width || 0) <= 768 ? true : false;
};
