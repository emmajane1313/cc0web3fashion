import { useEffect, useRef, useState } from "react";

const useBanner = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isPaused || !trackRef.current) return;

      const container = trackRef.current;
      const scrollLeft = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;

      const next = scrollLeft >= maxScroll ? 0 : scrollLeft + 320;
      container.scrollTo({ left: next, behavior: "smooth" });
    }, 3000);

    return () => clearInterval(intervalId);
  }, [isPaused]);

  return {
    trackRef,
    setIsPaused,
  };
};

export default useBanner;
