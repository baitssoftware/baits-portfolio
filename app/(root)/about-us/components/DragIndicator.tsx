import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface DragIndicatorProps {
  isVisible: boolean;
}

export function DragIndicator({ isVisible }: DragIndicatorProps) {
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible && indicatorRef.current) {
      gsap.fromTo(
        indicatorRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [isVisible]);

  return (
    <motion.div
      ref={indicatorRef}
      className={`fixed z-50 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        left: `${50}%`,
        top: `${50}%`,
      }}
    >
      <div className="flex items-center justify-center w-24 h-24 bg-[#C1FF00] rounded-full">
        <span className="text-black font-medium">DRAG</span>
      </div>
    </motion.div>
  );
}
