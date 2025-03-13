import { getBlogPost, getRelatedPosts } from '@/lib/api';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const post = await getBlogPost(resolvedParams.id);
  if (!post) return { title: 'Post Not Found..' };
  console.log({ params: resolvedParams });
  return { title: post.title };
}

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const post = await getBlogPost(resolvedParams.id);
  if (!post) notFound();

  const relatedPosts = await getRelatedPosts(post.id);

  return (
    <article className="min-h-screen">
      {/* Header Section */}
      <div className="max-w-[1400px] mx-auto px-4 pt-4 sm:pt-8">
        <Link
          href="/blogs"
          className="inline-flex items-center text-sm hover:underline mb-6 sm:mb-12"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to insights
        </Link>

        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-6 sm:mb-8">
            {post.title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-12 space-y-4 sm:space-y-0">
            <div className="flex items-center gap-4">
              <span className="text-sm">{post.date}</span>
              <span className="text-sm">By {post.author}</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {post.categories.map((category, index) => (
                <span
                  key={index}
                  className="text-xs sm:text-sm px-3 py-1 rounded-full border border-black/10"
                >
                  {category}
                </span>
              ))}
              <span className="text-xs sm:text-sm text-black/50 ml-2 sm:ml-4 hidden sm:inline-block">
                Share this article
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="rounded-lg overflow-hidden mb-8 sm:mb-16">
          <Image
            src={post.featuredImage || '/placeholder.svg'}
            alt={post.title}
            width={1400}
            height={600}
            className="w-full object-cover"
          />
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8">{post.subtitle}</h2>

          <div
            className="text-base sm:text-lg mb-12 sm:mb-16"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {post.gallery && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 my-12 sm:my-16">
              {post.gallery.map((image, index) => (
                <div
                  key={index}
                  className="bg-black rounded-lg aspect-square relative overflow-hidden"
                >
                  <Image
                    src={image.url || '/placeholder.svg'}
                    alt={image.alt || `Project image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          <div className="text-center mb-12 sm:mb-16 px-4">
            <Link href="/contact" className="text-base sm:text-lg underline underline-offset-4">
              Contact us today to see how we can bring your vision to life.
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-6 sm:py-8 border-t border-black/10 space-y-4 sm:space-y-0">
            <div className="flex items-center gap-4">
              <span className="text-sm">{post.date}</span>
              <span className="text-sm">By {post.author}</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {post.categories.map((category, index) => (
                <span
                  key={index}
                  className="text-xs sm:text-sm px-3 py-1 rounded-full border border-black/10"
                >
                  {category}
                </span>
              ))}
              <span className="text-xs sm:text-sm text-black/50 ml-2 sm:ml-4 hidden sm:inline-block">
                Share this article
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* More Like This Section */}
      <div className="bg-[#004851] text-white mt-12 sm:mt-24">
        <div className="max-w-[1400px] mx-auto px-4 py-12 sm:py-24">
          <h2 className="text-4xl sm:text-6xl md:text-8xl mb-8 sm:mb-16">THIS IS MORE LIKE IT</h2>
          <p className="text-lg sm:text-xl mb-8 sm:mb-16">Latest publications:</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {relatedPosts.map((relatedPost) => (
              <Link
                href={`/blogs/${relatedPost.slug}`}
                key={relatedPost.id}
                className="group mb-6 sm:mb-0"
              >
                <h3 className="text-lg sm:text-xl mb-2 group-hover:underline">
                  {relatedPost.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/60">
                  By {relatedPost.author}
                  <span className="mx-2">·</span>
                  {relatedPost.date}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
