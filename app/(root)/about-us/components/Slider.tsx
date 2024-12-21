"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SliderProps } from "./slider.interface";

export default function Slider({ slides }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showNextCursor, setShowNextCursor] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="relative min-h-screen bg-[#004d40] flex items-center justify-center overflow-hidden">
      {/* Custom Cursor */}
      {showNextCursor && (
        <motion.div
          className="fixed text-xl bg-[#c1ff45] text-black rounded-full w-28 h-28 flex items-center justify-center pointer-events-none z-50"
          animate={{
            x: cursorPosition.x - 840,
            y: cursorPosition.y - 340,
          }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 200,
          }}
        >
          NEXT
        </motion.div>
      )}

      {/* Slider */}
      <div className="relative w-[75vw] h-[70vh]">
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          const isNext = index === (currentIndex + 1) % slides.length;

          return (
            <motion.div
              key={index}
              className={`absolute inset-0 transition-transform duration-500 ${
                isActive
                  ? "z-20 scale-105" // Top card: slightly bigger
                  : isNext
                  ? "z-10 scale-95" // Bottom card: smaller
                  : "z-0 scale-90"
              }`}
              style={{
                transform: isActive
                  ? "translateY(20px)"
                  : isNext
                  ? "translateY(-30px) scale(0.92)" // Offset for bottom card
                  : "translateY(-0px) scale(0.15)",
                opacity: isActive ? 1 : 0.7,
              }}
            >
              <div
                className="bg-white rounded-[30px] shadow-lg overflow-hidden p-16 cursor-pointer"
                onMouseEnter={() => setShowNextCursor(true)}
                onMouseLeave={() => setShowNextCursor(false)}
                onMouseMove={handleMouseMove}
                onClick={handleNext}
                style={{ cursor: "none" }}
              >
                {/* Logo */}
                <div className="text-2xl font-bold mb-12">BAITS</div>

                <div className="grid grid-cols-5 justify-between items-center">
                  {/* Left Content */}
                  <div className="flex flex-col justify-between col-span-2">
                    <h1 className="text-8xl font-bold leading-none">
                      {slide.name}
                    </h1>
                  </div>

                  {/* Right Content */}
                  <div className="flex flex-col items-end gap-4 col-span-2">
                    <div className="relative w-[300px] h-[400px] bg-gray-100 rounded-xl overflow-hidden">
                      <Image
                        src={slide.image}
                        alt={slide.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-xl">{slide.role}</p>
                  </div>
                  <div className="text-6xl ms-auto font-semibold">
                    {(index + 1).toString().padStart(1, "0")}/
                    {slides.length.toString().padStart(1, "0")}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
