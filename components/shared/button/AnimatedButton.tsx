"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import RoundedButton from "./RoundedButton";

interface AnimatedButtonProps {
  text: string;
  href: string;
  className?: string;
}

export default function AnimatedButton({
  text,
  href,
  className = "",
}: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={href} passHref>
      <button
        className={`group relative bg-[#313131] rounded-full text-white uppercase text-xl border-none ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <RoundedButton className="ps-8 pe-4 py-4 border-none">
          <span className="relative z-10 flex items-center gap-4">
            {text}
            <div className="relative w-8 h-8 flex items-center justify-center">
              {/* Base dot that expands */}
              <motion.div
                className="absolute bg-white rounded-full"
                animate={{
                  width: isHovered ? "44px" : "8px",
                  height: isHovered ? "44px" : "8px",
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />

              {/* Arrow that appears on hover */}
              <motion.div
                className="relative z-20 text-[#313131]"
                animate={{
                  opacity: isHovered ? 1 : 0,
                  scale: isHovered ? 1 : 0,
                }}
                transition={{ delay: 0.1, duration: 0.2 }}
              >
                <ArrowUpRight className="w-6 h-6" />
              </motion.div>
            </div>
          </span>
        </RoundedButton>
      </button>
    </Link>
  );
}
