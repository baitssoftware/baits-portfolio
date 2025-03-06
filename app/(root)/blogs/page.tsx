'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const categories = [
  'ALL',
  'NEWS',
  'PITCH DECK',
  'PRESENTATION AGENCY',
  'PRESENTATION TEMPLATE',
  'PUBLIC SPEAKING',
  'STORYTELLING',
] as const;

type Category = (typeof categories)[number];

interface Article {
  id: string;
  title: string;
  image: string;
  author: string;
  date: string;
  category: Category;
  hasReadArticle?: boolean;
  aspectRatio: string;
}

const fetchArticles = async (): Promise<Article[]> => {
  // Simulating an API call
  await new Promise((resolve) => setTimeout(resolve, 500));
  return [
    {
      id: '1',
      title: 'Salience Labs Secures $30M to Redefine AI Infrastructure',
      image: '/blog/1.jpg',
      author: 'Kseniia Palamarchuk',
      date: '31 Jul. 24',
      category: 'NEWS',
      aspectRatio: 'aspect-[4/3]',
    },
    {
      id: '2',
      title: 'Nala Earth Secures €4M in Seed Funding to Transform Nature Tech',
      image: '/blog/Web-Development-Projects.png',
      author: 'Kseniia Palamarchuk',
      date: '31 Jul. 24',
      category: 'NEWS',
      aspectRatio: 'aspect-square',
    },
    {
      id: '3',
      title: 'Why hiring a presentation agency will boost your business',
      image: '/blog/Sorting-Algorithms.png',
      author: 'Ihor Hulyahrodskvy',
      date: '31 Jul. 24',
      category: 'PRESENTATION AGENCY',
      hasReadArticle: true,
      aspectRatio: 'aspect-[4/3]',
    },
    // ... add more articles here
  ];
};

export default function Insights() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('ALL');
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetchArticles().then(setArticles);
  }, []);

  const filteredArticles = articles.filter(
    (article) => selectedCategory === 'ALL' || article.category === selectedCategory,
  );

  const getRandomSpan = () => {
    // Only apply random spans on larger screens
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return '';
    }

    const spans = ['', 'lg:col-span-2', 'lg:row-span-2', 'lg:col-span-2 lg:row-span-2'];
    return spans[Math.floor(Math.random() * spans.length)];
  };

  return (
    <div className="min-h-screen bg-[#f1f1f1]">
      <div className="px-4 sm:px-8 md:px-12 lg:px-16 py-10 md:py-16 lg:py-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-10 md:mb-16 lg:mb-20">
          INSIGHTS
        </h1>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 md:mb-12 lg:mb-16 gap-4">
          <p className="text-lg md:text-xl">Latest insights:</p>

          <div className="w-full sm:w-auto overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    'px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm whitespace-nowrap border border-black/10 hover:bg-black hover:text-white transition-colors',
                    selectedCategory === category && 'bg-black text-white',
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {filteredArticles.map((article) => (
            <Link
              href={`/blogs/${article.id}`}
              key={article.id}
              className={cn('group cursor-pointer', getRandomSpan())}
            >
              <div
                className={cn(
                  'relative mb-3 md:mb-4 bg-white rounded-lg overflow-hidden',
                  article.aspectRatio,
                )}
              >
                <Image
                  src={article.image || '/placeholder.svg?height=400&width=600'}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {article.hasReadArticle && (
                  <div className="absolute inset-0 bg-black/80 flex flex-col justify-between p-4 sm:p-6 lg:p-8">
                    <p className="text-white text-lg sm:text-xl lg:text-2xl">{article.title}</p>
                    <p className="text-white/60 text-sm sm:text-base">Read Article</p>
                  </div>
                )}
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl mb-1 sm:mb-2 group-hover:underline line-clamp-2">
                {article.title}
              </h3>
              <div className="text-xs sm:text-sm text-gray-600">
                By {article.author}
                <span className="mx-2">·</span>
                {article.date}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
