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
    const spans = ['', 'md:col-span-2', 'md:row-span-2', 'md:col-span-2 md:row-span-2'];
    return spans[Math.floor(Math.random() * spans.length)];
  };

  return (
    <div className="min-h-screen bg-[#f1f1f1]">
      <div className="px-16 py-20">
        <h1 className="text-6xl md:text-8xl font-bold mb-20">INSIGHTS</h1>
        <div className="flex justify-between items-center mb-16 flex-wrap gap-4">
          <p className="text-xl">Latest insights:</p>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm border border-black/10 hover:bg-black hover:text-white transition-colors',
                  selectedCategory === category && 'bg-black text-white',
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredArticles.map((article) => (
            <Link
              href={`/blogs/${article.id}`}
              key={article.id}
              className={cn('group cursor-pointer', getRandomSpan())}
            >
              <div
                className={cn(
                  'relative mb-4 bg-white rounded-lg overflow-hidden',
                  article.aspectRatio,
                )}
              >
                <Image
                  src={article.image || '/placeholder.svg'}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
                {article.hasReadArticle && (
                  <div className="absolute inset-0 bg-black/80 flex flex-col justify-between p-8">
                    <p className="text-white text-2xl">{article.title}</p>
                    <p className="text-white/60">Read Article</p>
                  </div>
                )}
              </div>
              <h3 className="text-xl mb-2 group-hover:underline">{article.title}</h3>
              <div className="text-sm text-gray-600">
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
