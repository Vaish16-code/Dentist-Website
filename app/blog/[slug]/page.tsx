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
    title: post.metaTitle || `${post.title} | Dental Essential Blog`,
    description: post.metaDescription || post.excerpt,
    alternates: {
      canonical: `https://www.dentalessential.co.in/blog/${post.slug}`,
    },
    keywords: `${post.category}, dental health, ${post.title.toLowerCase()}`,
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
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

  if (relatedPosts.length < 3) {
    const otherPosts = blogPosts
      .filter(p => p.slug !== post.slug && !relatedPosts.includes(p))
      .slice(0, 3 - relatedPosts.length);
    relatedPosts.push(...otherPosts);
  }

  const lines = post.content.split('\n');

  // Helper: process bold + markdown links [text](url)
  const processInline = (text: string) =>
    text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900 font-bold">$1</strong>')
      .replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" class="text-sky-600 font-semibold underline decoration-sky-300 underline-offset-4 hover:text-sky-800 hover:decoration-sky-600 transition-colors">$1</a>'
      );

  // Render content elements cleanly with beautified styling & icons
  const renderElements = () => {
    const elements: React.ReactNode[] = [];
    let tableLines: string[] = [];
    let inTable = false;

    lines.forEach((paragraph, index) => {
      const trimmed = paragraph.trim();

      // Handle Markdown Tables
      if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
        inTable = true;
        tableLines.push(trimmed);
        return;
      } else if (inTable) {
        inTable = false;
        const currentTable = [...tableLines];
        tableLines = [];

        if (currentTable.length >= 2) {
          const headerCells = currentTable[0].split('|').filter(c => c.trim().length > 0).map(c => c.trim());
          const rows = currentTable.slice(2).map(r => r.split('|').filter(c => c.trim().length > 0).map(c => c.trim()));

          elements.push(
            <div key={`table-${index}`} className="my-8 overflow-hidden rounded-2xl border border-slate-200 shadow-md">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse bg-white">
                  <thead>
                    <tr className="bg-gradient-to-r from-sky-600 to-blue-600 text-white font-bold text-sm tracking-wide">
                      {headerCells.map((cell, cIdx) => (
                        <th key={cIdx} className="py-3.5 px-5 border-b border-sky-700/50">
                          {cell}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
                    {rows.map((row, rIdx) => (
                      <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white hover:bg-sky-50/40 transition-colors' : 'bg-slate-50/70 hover:bg-sky-50/40 transition-colors'}>
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="py-3.5 px-5 font-medium" dangerouslySetInnerHTML={{ __html: processInline(cell) }} />
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        }
      }

      if (!trimmed) return;

      // H2 headings - Styled with gradient left line and clean background tint
      if (trimmed.startsWith('## ')) {
        elements.push(
          <div key={index} className="mt-12 mb-6 pt-2">
            <div className="flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-sky-500 to-blue-600 rounded-full shrink-0 shadow-sm" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {trimmed.replace('## ', '')}
              </h2>
            </div>
            <div className="h-0.5 w-full bg-gradient-to-r from-sky-300 via-slate-200 to-transparent mt-3.5 rounded-full" />
          </div>
        );
        return;
      }

      // H3 headings
      if (trimmed.startsWith('### ')) {
        elements.push(
          <h3 key={index} className="text-xl sm:text-2xl font-bold text-slate-800 mt-9 mb-4 flex items-center gap-2.5">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-sky-100 text-sky-600 text-sm font-black">
              ✦
            </span>
            <span>{trimmed.replace('### ', '')}</span>
          </h3>
        );
        return;
      }

      // H4 headings / sub-headings
      if (trimmed.startsWith('#### ')) {
        elements.push(
          <h4 key={index} className="text-lg font-bold text-sky-900 mt-7 mb-3 bg-gradient-to-r from-sky-50 to-blue-50/30 border-l-4 border-sky-500 px-4 py-2 rounded-r-xl shadow-xs">
            {trimmed.replace('#### ', '')}
          </h4>
        );
        return;
      }

      // Blockquotes starting with > or Note boxes starting with > or *Note:
      if (trimmed.startsWith('>') || trimmed.startsWith('*Note:') || trimmed.startsWith('Note:')) {
        const cleanQuote = trimmed.replace(/^>\s*/, '').replace(/^\*Note:\s*/, '').replace(/^Note:\s*/, '');
        elements.push(
          <div key={index} className="my-6 p-5 rounded-2xl bg-gradient-to-r from-sky-50 via-blue-50/40 to-white border-l-4 border-sky-500 shadow-xs flex items-start gap-4">
            <div className="w-9 h-9 rounded-full bg-sky-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-sky-500/20 text-lg">
              💡
            </div>
            <div className="text-slate-700 leading-relaxed font-medium pt-1" dangerouslySetInnerHTML={{ __html: processInline(cleanQuote) }} />
          </div>
        );
        return;
      }

      // Numbered lists - Render with stylish circular gradient badges
      if (/^\d+\.\s/.test(trimmed)) {
        const num = trimmed.split('.')[0];
        const restText = trimmed.replace(/^\d+\.\s/, '');
        elements.push(
          <div key={index} className="flex items-start gap-3.5 my-3.5 pl-1 group">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-white text-xs font-extrabold shrink-0 mt-0.5 shadow-md shadow-sky-500/20 group-hover:scale-110 transition-transform">
              {num}
            </span>
            <div className="text-slate-700 leading-relaxed text-[16.5px] pt-0.5" dangerouslySetInnerHTML={{ __html: processInline(restText) }} />
          </div>
        );
        return;
      }

      // Bullet points - Render with stylish custom icons based on content
      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        const cleanBullet = trimmed.replace(/^[-*]\s/, '');

        // Myth / Fact custom styling
        if (cleanBullet.includes('**Myth:**') || cleanBullet.startsWith('Myth:')) {
          const content = cleanBullet.replace('**Myth:**', '').replace('Myth:', '');
          elements.push(
            <div key={index} className="my-3 p-4 rounded-xl bg-rose-50/80 border border-rose-200 flex items-start gap-3 shadow-xs">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-rose-500 text-white text-xs font-bold shrink-0 mt-0.5 shadow-sm">
                ✕
              </span>
              <div className="text-slate-800 text-[16px] leading-relaxed">
                <span className="font-bold text-rose-700 mr-2">MYTH:</span>
                <span dangerouslySetInnerHTML={{ __html: processInline(content) }} />
              </div>
            </div>
          );
          return;
        }

        if (cleanBullet.includes('**Fact:**') || cleanBullet.startsWith('Fact:')) {
          const content = cleanBullet.replace('**Fact:**', '').replace('Fact:', '');
          elements.push(
            <div key={index} className="my-3 p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 flex items-start gap-3 shadow-xs">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500 text-white text-xs font-bold shrink-0 mt-0.5 shadow-sm">
                ✓
              </span>
              <div className="text-slate-800 text-[16px] leading-relaxed">
                <span className="font-bold text-emerald-700 mr-2">FACT:</span>
                <span dangerouslySetInnerHTML={{ __html: processInline(content) }} />
              </div>
            </div>
          );
          return;
        }

        // Advantage checkmark
        if (cleanBullet.includes('✔') || cleanBullet.startsWith('Advantages')) {
          elements.push(
            <div key={index} className="flex items-start gap-3 my-2.5 pl-1 group">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 shrink-0 mt-0.5 shadow-xs group-hover:scale-110 transition-transform">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <div className="text-slate-700 leading-relaxed text-[16.5px] pt-0.5" dangerouslySetInnerHTML={{ __html: processInline(cleanBullet.replace('✔', '')) }} />
            </div>
          );
          return;
        }

        // Standard bullet point -> Stylish checkmark badge icon
        elements.push(
          <div key={index} className="flex items-start gap-3 my-3 pl-1 group">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-tr from-sky-500 to-blue-600 text-white shrink-0 mt-0.5 shadow-sm shadow-sky-500/20 group-hover:scale-110 transition-transform">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <div className="text-slate-700 leading-relaxed text-[16.5px] pt-0.5" dangerouslySetInnerHTML={{ __html: processInline(cleanBullet) }} />
          </div>
        );
        return;
      }

      // Regular paragraphs
      elements.push(
        <p
          key={index}
          className="mb-5 text-slate-700 leading-relaxed text-[17px] tracking-normal"
          dangerouslySetInnerHTML={{
            __html: processInline(trimmed)
          }}
        />
      );
    });

    return elements;
  };

  return (
    <main className="min-h-screen bg-slate-50/50">
      {/* Banner / Header Section */}
      <section className="relative bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800 text-white pt-12 pb-20 overflow-hidden">
        {/* Subtle decorative background circles */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Top Breadcrumb & Metadata */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium transition-colors backdrop-blur-xs"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center bg-sky-400/30 text-sky-100 border border-white/20 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-sky-100 bg-white/10 px-3 py-1 rounded-full">
                ⏱️ {post.readTime}
              </span>
            </div>
          </div>

          {/* Article Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-8 leading-[1.25] tracking-tight">
            {post.title}
          </h1>

          {/* Author Bar */}
          <div className="flex items-center gap-4 pt-4 border-t border-white/15">
            <div className="w-12 h-12 rounded-full bg-white text-sky-700 flex items-center justify-center font-bold text-lg shadow-md shrink-0">
              {post.author.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <p className="font-semibold text-white text-base">{post.author.name}</p>
              <p className="text-xs text-sky-200 font-medium">{post.author.role} • Published on {post.publishDate}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image Section - Fixed Top Clipping */}
      <section className="relative z-20 -mt-10 mb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="relative w-full aspect-[16/9] sm:aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900/5">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 1024px"
              priority
            />
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="pb-16 pt-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm border border-slate-200/80">
            {/* Article Elements */}
            <div className="prose prose-lg prose-sky max-w-none">
              {renderElements()}
            </div>

            {/* Clinic Appointment CTA Card */}
            <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-sky-600 to-blue-700 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <h3 className="text-2xl font-bold">Ready for a Healthier, Straighter Smile?</h3>
                <p className="text-sky-100 text-sm max-w-xl">
                  Consult with expert dentists at Dental Essential Clinic in Panvel. Get personalized treatment plans & affordable care.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
                <a
                  href="tel:+918779646573"
                  className="px-6 py-3 bg-white text-sky-700 hover:bg-sky-50 font-bold rounded-xl text-center text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  📞 Call +91 877-9646573
                </a>
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-sky-900/40 hover:bg-sky-900/60 border border-white/30 text-white font-bold rounded-xl text-center text-sm transition-all flex items-center justify-center gap-2"
                >
                  📅 Book Online
                </Link>
              </div>
            </div>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-slate-600 font-semibold text-sm mb-3">Share this article</p>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 bg-sky-50 hover:bg-sky-100 text-sky-600 rounded-full flex items-center justify-center transition-colors shadow-xs">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </button>
                    <button className="w-10 h-10 bg-sky-50 hover:bg-sky-100 text-sky-600 rounded-full flex items-center justify-center transition-colors shadow-xs">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </button>
                    <button className="w-10 h-10 bg-sky-50 hover:bg-sky-100 text-sky-600 rounded-full flex items-center justify-center transition-colors shadow-xs">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <Link
                  href="/blog"
                  className="text-sky-600 hover:text-sky-700 font-semibold inline-flex items-center gap-2 bg-sky-50 hover:bg-sky-100 px-5 py-2.5 rounded-full transition-colors text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to all articles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-slate-100/60 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-10 text-slate-800">
              Related <span className="text-sky-600">Articles</span>
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold px-7 py-3 rounded-full shadow-md shadow-sky-600/20 transition-all hover:gap-3"
              >
                View All Articles
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

