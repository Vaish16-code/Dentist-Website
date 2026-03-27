'use client';

import { blogPosts, formatDate, formatDateShort } from '@/data/blog';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function BlogPage() {
  const categories = ['All Posts', ...new Set(blogPosts.map(post => post.category))];
  const [selectedCategory, setSelectedCategory] = useState<string>('All Posts');

  const filteredPosts = selectedCategory === 'All Posts'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = filteredPosts[0];
  const gridPosts = filteredPosts.slice(1);

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#F4F7FF', fontFamily: "'Poppins', sans-serif" }}>

      {/* Page Header */}
      <section style={{
        background: 'linear-gradient(135deg, #003580 0%, #0057B8 60%, #00AEEF 100%)',
        padding: '60px 20px 40px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.07,
          backgroundImage: 'radial-gradient(circle at 25% 50%, white 1px, transparent 1px), radial-gradient(circle at 75% 50%, white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: '800',
            color: '#ffffff',
            margin: '0 0 12px',
            letterSpacing: '-0.5px'
          }}>
            Latest Blog
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', lineHeight: 1.6, margin: 0 }}>
            Stay informed with the latest dental health tips, treatment guides, and expert advice from our experienced team at Dental Essential.
          </p>
        </div>
        {/* Wave bottom */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, lineHeight: 0 }}>
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width: '100%', height: '60px' }}>
            <path d="M0 60V20C240 60 480 60 720 40C960 20 1200 0 1440 20V60H0Z" fill="#F4F7FF" />
          </svg>
        </div>
      </section>

      {/* Category Filter */}
      <section style={{ padding: '30px 20px 0', backgroundColor: '#F4F7FF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '8px 20px',
                  borderRadius: '50px',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  border: selectedCategory === cat ? '2px solid #0057B8' : '2px solid #d1daf0',
                  backgroundColor: selectedCategory === cat ? '#0057B8' : '#ffffff',
                  color: selectedCategory === cat ? '#ffffff' : '#4a5568',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: selectedCategory === cat ? '0 4px 14px rgba(0,87,184,0.3)' : '0 2px 6px rgba(0,0,0,0.06)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section style={{ padding: '40px 20px 20px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <Link href={`/blog/${featuredPost.slug}`} style={{ textDecoration: 'none' }}>
              <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 4px 24px rgba(0, 55, 128, 0.10)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                transition: 'box-shadow 0.3s ease, transform 0.3s ease',
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 40px rgba(0, 55, 128, 0.18)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 24px rgba(0, 55, 128, 0.10)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                }}
              >
                {/* Image */}
                <div style={{ position: 'relative', minHeight: '300px' }}>
                  <Image
                    src={featuredPost.featuredImage}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Date overlay */}
                  <div style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    backgroundColor: '#0057B8',
                    color: '#fff',
                    padding: '6px 14px',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    letterSpacing: '0.5px'
                  }}>
                    {formatDateShort(featuredPost.publishDate)}
                  </div>
                  {/* Featured badge */}
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    backgroundColor: '#00AEEF',
                    color: '#fff',
                    padding: '4px 14px',
                    borderRadius: '50px',
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    Featured
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '36px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <span style={{
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    color: '#00AEEF',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '10px',
                    display: 'block'
                  }}>
                    {featuredPost.category} · {featuredPost.readTime}
                  </span>
                  <h2 style={{
                    fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
                    fontWeight: '800',
                    color: '#1a2744',
                    margin: '0 0 14px',
                    lineHeight: 1.35
                  }}>
                    {featuredPost.title}
                  </h2>
                  <p style={{
                    color: '#6b7a99',
                    fontSize: '0.97rem',
                    lineHeight: 1.7,
                    margin: '0 0 24px',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {featuredPost.excerpt}
                  </p>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#ffffff',
                    backgroundColor: '#0057B8',
                    padding: '10px 24px',
                    borderRadius: '10px',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    width: 'fit-content',
                    border: '2px solid #0057B8',
                    transition: 'background 0.2s'
                  }}>
                    Learn More
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section style={{ padding: '30px 20px 60px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {gridPosts.length > 0 ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '28px'
            }}>
              {gridPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '60px 20px' }}>
              <p style={{ color: '#6b7a99', fontSize: '1.1rem' }}>No articles found in this category.</p>
              <button
                onClick={() => setSelectedCategory('All Posts')}
                style={{
                  marginTop: '16px',
                  color: '#0057B8',
                  background: 'none',
                  border: 'none',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: '1rem'
                }}
              >
                View all posts →
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #003580 0%, #0057B8 100%)',
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ color: '#ffffff', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: '800', margin: '0 0 14px' }}>
            Have Questions? We&apos;re Here to Help
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '1rem', lineHeight: 1.6, margin: '0 0 32px' }}>
            Our team is ready to answer your dental health questions and help you achieve the smile you deserve.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
            <Link
              href="/book"
              style={{
                backgroundColor: '#ffffff',
                color: '#0057B8',
                padding: '13px 32px',
                borderRadius: '10px',
                fontWeight: '700',
                fontSize: '0.95rem',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
                transition: 'transform 0.2s'
              }}
            >
              Book Appointment
            </Link>
            <Link
              href="/contact"
              style={{
                backgroundColor: 'transparent',
                color: '#ffffff',
                padding: '13px 32px',
                borderRadius: '10px',
                fontWeight: '700',
                fontSize: '0.95rem',
                textDecoration: 'none',
                border: '2px solid rgba(255,255,255,0.6)',
                transition: 'transform 0.2s'
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

// Inline BlogCard component styled like Smile Avenue
function BlogCard({ post }: { post: import('@/data/blog').BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
      <article
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 2px 16px rgba(0, 55, 128, 0.08)',
          transition: 'box-shadow 0.3s ease, transform 0.3s ease',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          cursor: 'pointer'
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 32px rgba(0, 55, 128, 0.15)';
          (e.currentTarget as HTMLElement).style.transform = 'translateY(-5px)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 16px rgba(0, 55, 128, 0.08)';
          (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
        }}
      >
        {/* Image */}
        <div style={{ position: 'relative', height: '200px', flexShrink: 0 }}>
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ transition: 'transform 0.4s ease' }}
          />
          {/* Date on image */}
          <div style={{
            position: 'absolute',
            bottom: '12px',
            left: '14px',
            backgroundColor: '#0057B8',
            color: '#ffffff',
            padding: '4px 12px',
            borderRadius: '7px',
            fontSize: '0.75rem',
            fontWeight: '700',
            letterSpacing: '0.3px'
          }}>
            {formatDateShort(post.publishDate)}
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '22px 24px 26px', flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Category */}
          <span style={{
            fontSize: '0.72rem',
            fontWeight: '700',
            color: '#00AEEF',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            display: 'block',
            marginBottom: '8px'
          }}>
            {post.category}
          </span>

          {/* Title */}
          <h3 style={{
            fontSize: '1.05rem',
            fontWeight: '700',
            color: '#1a2744',
            margin: '0 0 10px',
            lineHeight: 1.4,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            flex: 0
          }}>
            {post.title}
          </h3>

          {/* Excerpt */}
          <p style={{
            color: '#7a8aaa',
            fontSize: '0.875rem',
            lineHeight: 1.65,
            margin: '0 0 20px',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            flex: 1
          }}>
            {post.excerpt}
          </p>

          {/* Read More */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: '#0057B8',
            fontWeight: '600',
            fontSize: '0.875rem',
            paddingTop: '14px',
            borderTop: '1px solid #edf2fb'
          }}>
            Read More
            <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}
