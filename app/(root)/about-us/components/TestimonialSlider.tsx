'use client';

import { motion, useMotionValue } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { testimonials } from '../data/testimonialsData';

export function TestimonialSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });

  // Calculate drag constraints based on container and content width
  useEffect(() => {
    if (sliderRef.current && containerRef.current) {
      const calculateConstraints = () => {
        const containerWidth = containerRef.current?.clientWidth || 0;
        const contentWidth = sliderRef.current?.scrollWidth || 0;
        const rightConstraint = 0;
        const leftConstraint = containerWidth - contentWidth;

        setDragConstraints({
          left: Math.min(leftConstraint, 0), // Ensure left constraint is never positive
          right: rightConstraint,
        });
      };

      calculateConstraints();
      window.addEventListener('resize', calculateConstraints);

      return () => window.removeEventListener('resize', calculateConstraints);
    }
  }, []);

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
    <div
      ref={containerRef}
      className="relative overflow-hidden px-4 sm:px-8 md:px-12 lg:px-16 py-10 sm:py-14 md:py-16 lg:py-20"
    >
      <motion.div
        ref={sliderRef}
        className="flex gap-3 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={dragConstraints}
        style={{ x }}
      >
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            className="flex-shrink-0 w-[280px] sm:w-[350px] md:w-[400px] lg:w-[450px] p-4 sm:p-6 md:p-8 opacity-100"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="h-12 sm:h-14 md:h-16 mb-4 sm:mb-6 md:mb-8">
              <Image
                src={testimonial.logo || '/placeholder.svg'}
                alt={`${testimonial.company} logo`}
                width={120}
                height={64}
                className="object-contain w-auto h-12 sm:h-16 md:h-20"
              />
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-medium mb-2 sm:mb-3 md:mb-4 pt-2 sm:pt-3 md:pt-4 underline underline-offset-[4px] sm:underline-offset-[6px] md:underline-offset-[8px]">
              {testimonial.company}
            </h3>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
              {testimonial.text}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
