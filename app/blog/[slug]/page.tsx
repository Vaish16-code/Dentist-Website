import { blogPosts, getBlogPostBySlug, getAllBlogSlugs } from '@/data/blog';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import BlogCard from '@/components/BlogCard';

// Generate static params for all blog posts
export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Article Not Found | Dental Essential Blog',
    };
  }

  return {
    title: `${post.title} | Dental Essential Blog`,
    description: post.excerpt,
    keywords: `${post.category}, dental health, ${post.title.toLowerCase()}`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishDate,
      authors: [post.author.name],
    },
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  // If not enough related posts in same category, add from other categories
  if (relatedPosts.length < 3) {
    const otherPosts = blogPosts
      .filter(p => p.slug !== post.slug && !relatedPosts.includes(p))
      .slice(0, 3 - relatedPosts.length);
    relatedPosts.push(...otherPosts);
  }

  return (
    <main className="min-h-screen">
      {/* Banner Section */}
      <section className="relative bg-gradient-to-br from-sky-500 via-sky-600 to-blue-600 py-20">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        <div className="max-w-4xl mx-auto px-4 relative">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-sky-100 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>

            <span className="inline-flex items-center bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Author */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-white font-semibold">
                  {post.author.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <p className="font-medium text-white">{post.author.name}</p>
                <p className="text-sm text-sky-200">{post.author.role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 100V0C240 66.6667 480 100 720 100C960 100 1200 66.6667 1440 0V100H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white pt-8 pb-4">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg -mt-16">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1024px"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          {/* Article Body */}
          <div className="prose prose-lg prose-sky max-w-none">
            {/* Custom styling for markdown-like content */}
            <div className="text-gray-700 leading-relaxed space-y-6">
              {post.content.split('\n').map((paragraph, index) => {
                const trimmed = paragraph.trim();
                
                // Skip empty lines
                if (!trimmed) return null;

                // H2 headings
                if (trimmed.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-sky-600 mt-10 mb-4">
                      {trimmed.replace('## ', '')}
                    </h2>
                  );
                }

                // H3 headings
                if (trimmed.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl font-semibold text-gray-800 mt-8 mb-3">
                      {trimmed.replace('### ', '')}
                    </h3>
                  );
                }

                // Numbered lists
                if (/^\d+\.\s/.test(trimmed)) {
                  return (
                    <p key={index} className="ml-6 mb-2">
                      <span className="font-semibold text-sky-600">{trimmed.split('.')[0]}.</span>
                      {' '}
                      <span dangerouslySetInnerHTML={{ 
                        __html: trimmed.replace(/^\d+\.\s/, '').replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-800">$1</strong>') 
                      }} />
                    </p>
                  );
                }

                // Bullet points
                if (trimmed.startsWith('- ')) {
                  return (
                    <div key={index} className="flex gap-3 ml-4 mb-2">
                      <span className="text-sky-500 mt-1">•</span>
                      <span dangerouslySetInnerHTML={{ 
                        __html: trimmed.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-800">$1</strong>') 
                      }} />
                    </div>
                  );
                }

                // Regular paragraphs with bold text support
                return (
                  <p 
                    key={index} 
                    className="mb-4"
                    dangerouslySetInnerHTML={{ 
                      __html: trimmed.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-800">$1</strong>') 
                    }}
                  />
                );
              })}
            </div>
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-gray-600 font-medium mb-2">Share this article</p>
                <div className="flex gap-3">
                  <button className="w-10 h-10 bg-sky-100 hover:bg-sky-200 text-sky-600 rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </button>
                  <button className="w-10 h-10 bg-sky-100 hover:bg-sky-200 text-sky-600 rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  </button>
                  <button className="w-10 h-10 bg-sky-100 hover:bg-sky-200 text-sky-600 rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                    </svg>
                  </button>
                </div>
              </div>
              <Link
                href="/blog"
                className="text-sky-600 hover:text-sky-700 font-medium inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to all articles
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">
              <span className="text-pink-500">Related</span>{' '}
              <span className="text-sky-500">Articles</span>
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-medium"
              >
                View All Articles
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
