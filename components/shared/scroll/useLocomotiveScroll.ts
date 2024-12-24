"use client";

import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { usePathname } from "next/navigation";

export function useLocomotiveScroll() {
  const scrollRef = useRef<LocomotiveScroll | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!containerRef.current) return;

    scrollRef.current = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      multiplier: 0.5,
    });

    return () => {
      scrollRef.current?.destroy();
    };
  }, []);

  useEffect(() => {
    if (!scrollRef.current) return;

    // Update scroll on route change
    scrollRef.current.update();

    // Scroll to top on route change
    scrollRef.current.scrollTo(0, { duration: 0, disableLerp: true });
  }, [pathname]);

  return { containerRef, scrollRef };
}
