import { useEffect, useRef, useState } from "react";
import { slice } from "viem";

const useTrack = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const indexRef = useRef<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const container = trackRef.current;
    const items = container.children;

    const avanzar = () => {
      if (isPaused || items.length === 0) return;

      const nextIndex = (indexRef.current + 1) % items.length;

  if (nextIndex === 0) {
    container.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  } else {
    const nextItem = items[nextIndex] as HTMLElement;
    container.scrollTo({
      left: nextItem.offsetLeft,
      behavior: "smooth",
    });
  }

      indexRef.current = nextIndex;

      timeoutRef.current = setTimeout(avanzar, 10000);
    };

    timeoutRef.current = setTimeout(avanzar, 10000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isPaused]);

  return { trackRef, setIsPaused };
};

export default useTrack;
