"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils"; // Import the cn utility
import gsap, { TimelineLite } from "gsap";

interface RoundedButtonProps {
  children: React.ReactNode;
  backgroundColor?: string;
  className?: string; // Allow custom className
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any; // Allow additional props
}

export default function RoundedButton({
  children,
  backgroundColor = "#212121",
  className,
  ...attributes
}: RoundedButtonProps) {
  const circle = useRef<HTMLDivElement | null>(null);
  const timeline = useRef<TimelineLite | null>(null);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    timeline.current?.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId.current = setTimeout(() => {
      timeline.current?.play();
    }, 300);
  };

  return (
    <div
      className={cn(
        "roundedButton flex items-center justify-center relative cursor-pointer rounded-full hover:text-white border ",
        className // Merge with dynamic className
      )}
      style={{ overflow: "hidden" }}
      onMouseEnter={manageMouseEnter}
      onMouseLeave={manageMouseLeave}
      {...attributes}
    >
      <span>{children}</span>
      <div ref={circle} style={{ backgroundColor }} className="circle"></div>
    </div>
  );
}
