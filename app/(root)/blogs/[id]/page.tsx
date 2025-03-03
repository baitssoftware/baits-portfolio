import { getBlogPost, getRelatedPosts } from '@/lib/api';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const resolvedParams = await params;
  const post = await getBlogPost(resolvedParams.id);
  if (!post) return { title: 'Post Not Found' };
  console.log({ params: resolvedParams });
  return { title: post.title };
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  const resolvedParams = await params;
  const post = await getBlogPost(resolvedParams.id);
  if (!post) notFound();

  const relatedPosts = await getRelatedPosts(post.id);

  return (
    <article className="min-h-screen">
      {/* Header Section */}
      <div className="max-w-[1400px] mx-auto px-4 pt-8">
        <Link href="/insights" className="inline-flex items-center text-sm hover:underline mb-12">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to insights
        </Link>

        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-normal mb-8">{post.title}</h1>

          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
              <span className="text-sm">{post.date}</span>
              <span className="text-sm">By {post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              {post.categories.map((category, index) => (
                <span key={index} className="text-sm px-3 py-1 rounded-full border border-black/10">
                  {category}
                </span>
              ))}
              <span className="text-sm text-black/50 ml-4">Share this article</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="rounded-lg overflow-hidden mb-16">
          <Image
            src={post.featuredImage || '/placeholder.svg'}
            alt={post.title}
            width={1400}
            height={600}
            className="w-full object-cover"
          />
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl mb-8">{post.subtitle}</h2>

          <div className="text-lg mb-16" dangerouslySetInnerHTML={{ __html: post.content }} />

          {post.gallery && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-16">
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

          <div className="text-center mb-16">
            <Link href="/contact" className="text-lg underline underline-offset-4">
              Contact us today to see how we can bring your vision to life.
            </Link>
          </div>

          <div className="flex items-center justify-between py-8 border-t border-black/10">
            <div className="flex items-center gap-4">
              <span className="text-sm">{post.date}</span>
              <span className="text-sm">By {post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              {post.categories.map((category, index) => (
                <span key={index} className="text-sm px-3 py-1 rounded-full border border-black/10">
                  {category}
                </span>
              ))}
              <span className="text-sm text-black/50 ml-4">Share this article</span>
            </div>
          </div>
        </div>
      </div>

      {/* More Like This Section */}
      <div className="bg-[#004851] text-white mt-24">
        <div className="max-w-[1400px] mx-auto px-4 py-24">
          <h2 className="text-6xl md:text-8xl mb-16">THIS IS MORE LIKE IT</h2>
          <p className="text-xl mb-16">Latest publications:</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <Link href={`/insights/${relatedPost.slug}`} key={relatedPost.id} className="group">
                <h3 className="text-xl mb-2 group-hover:underline">{relatedPost.title}</h3>
                <p className="text-sm text-white/60">
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
