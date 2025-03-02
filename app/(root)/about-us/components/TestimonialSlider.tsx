'use client';

import { motion, useMotionValue } from 'framer-motion';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

import Image from 'next/image';
import { testimonials } from '../data/testimonialsData';

export function TestimonialSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  // Initialize GSAP animations
  useEffect(() => {
    if (sliderRef.current) {
      gsap.from(sliderRef.current.children, {
        opacity: 1,
        y: 20,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      });
    }
  }, []);

  return (
    <div className="relative overflow-hidden px-16 py-20 ">
      {/* <DragIndicator isVisible={isHovered && !isDragging} /> */}

      <motion.div
        ref={sliderRef}
        className="flex gap-3 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{
          left: -1000, // Adjust based on content width
          right: 0,
        }}
        style={{ x }}
      >
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            className="flex-shrink-0 w-[450px] p-8 opacity-100"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="h-16 mb-8 ">
              <Image
                src={testimonial.logo}
                alt={`${testimonial.company} logo`}
                width={120}
                height={64}
                className="object-contain w-auto h-20"
              />
            </div>
            <h3 className="text-3xl font-medium mb-4 pt-4 underline underline-offset-[8px] ">
              {testimonial.company}
            </h3>
            <p className="text-gray-600 text-xl leading-relaxed">{testimonial.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
