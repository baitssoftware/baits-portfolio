"use client";

import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smartphone: {
        smooth: false,
      },
      tablet: {
        smooth: true,
        breakpoint: 768,
      },
    });

    // Refresh Locomotive Scroll when the page content changes
    const resizeObserver = new ResizeObserver(() => {
      scroll.update();
    });

    resizeObserver.observe(scrollRef.current);

    return () => {
      scroll.destroy();
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
};

export default SmoothScroll;
