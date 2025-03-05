'use client';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const blogs = [
  {
    id: 1,
    category: 'Web Solution',
    title: 'Make a better website solution for your product.',
    image: '/stats.jpg',
    link: '#',
  },
  {
    id: 2,
    category: 'UI Interface',
    title: 'The Science of Color Contrast – An Expert Designers Guide',
    image: '/p1.png',
    link: '#',
  },
  {
    id: 3,
    category: 'Web Interface',
    title: 'SEO Made Simple: A Step by Step Guide for 2024',
    image: '/p3.jpg',
    link: '#',
  },
  {
    id: 4,
    category: 'Interface Design',
    title: 'Make a better product with our UX research methods',
    image: '/p2.jpg',
    link: '#',
  },
  {
    id: 5,
    category: 'UI Interface',
    title: 'The Science of Color Contrast – An Expert Designers Guide',
    image: '/p1.png',
    link: '#',
  },
  {
    id: 6,
    category: 'Web Solution',
    title: 'Make a better website solution for your product.',
    image: '/stats.jpg',
    link: '#',
  },
  {
    id: 7,
    category: 'UI Interface',
    title: 'The Science of Color Contrast – An Expert Designers Guide',
    image: '/p1.png',
    link: '#',
  },
];

const BlogCard = ({ blog, index }: { blog: (typeof blogs)[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="flex-shrink-0 w-full"
  >
    <div className="bg-white rounded-lg overflow-hidden group">
      <div className="relative h-[200px] sm:h-[250px] md:h-[280px] lg:h-[320px] overflow-hidden">
        <Image
          src={blog.image || '/placeholder.svg'}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority={index === 0}
        />
      </div>
      <div className="p-4 sm:p-5 lg:p-6">
        <span className="text-xs sm:text-sm lg:text-sm text-gray-600">{blog.category}</span>
        <h3 className="mt-1 sm:mt-2 lg:mt-2 text-base sm:text-lg lg:text-xl font-semibold text-gray-900 line-clamp-2 min-h-[40px] sm:min-h-[48px] lg:min-h-[56px]">
          {blog.title}
        </h3>
        <motion.a
          href={blog.link}
          className="inline-flex items-center mt-2 sm:mt-3 lg:mt-4 text-blue-600 hover:text-blue-700 text-sm sm:text-base lg:text-base"
          whileHover={{ x: 5 }}
        >
          Read Blog
          <ArrowRight className="ml-1 sm:ml-2 lg:ml-2 h-3 w-3 sm:h-4 sm:w-4 lg:h-4 lg:w-4" />
        </motion.a>
      </div>
    </div>
  </motion.div>
);

const BlogSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardsToShow, setCardsToShow] = useState(4);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(4);
      }
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);

    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const handlePrevious = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(blogs.length - cardsToShow, prev + 1));
  };

  const visibleBlogs = blogs.slice(startIndex, startIndex + cardsToShow);

  return (
    <section className="py-16 sm:py-24 md:py-32 lg:py-40 bg-white">
      <div className="px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 gap-4 sm:gap-0">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-s text-gray-900"
          >
            Our Latest Blogs
          </motion.h2>
          <div className="flex gap-2">
            <button
              onClick={handlePrevious}
              disabled={startIndex === 0}
              className="p-1 sm:p-1.5 md:p-2 lg:p-2 border rounded-sm hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-white"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 md:h-6 md:w-6 lg:h-7 lg:w-7" />
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex >= blogs.length - cardsToShow}
              className="p-1 sm:p-1.5 md:p-2 lg:p-2 border rounded-sm hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-white"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 md:h-6 md:w-6 lg:h-7 lg:w-7" />
            </button>
          </div>
        </div>

        <div ref={containerRef} className="overflow-hidden">
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-5 lg:gap-6 transition-transform duration-300`}
          >
            {visibleBlogs.map((blog, index) => (
              <BlogCard key={blog.id} blog={blog} index={index} />
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6 sm:mt-6 md:mt-8 lg:mt-8 gap-2">
          {Array.from({ length: blogs.length - cardsToShow + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setStartIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                startIndex === index ? 'bg-blue-600 w-4' : 'bg-gray-300'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
