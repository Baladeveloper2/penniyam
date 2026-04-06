"use client";

import Link from "next/link";
import { blogPosts } from "@/data/blog";

export default function BlogPage() {
  return (
    <div className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Penniyam <span style={{ color: 'var(--primary)' }}>Insights</span></h1>
          <p style={{ color: 'var(--muted-foreground)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            Educational resources, success stories, and expert advice to help you scale your entrepreneurial journey.
          </p>
        </div>

        <div style={{ display: 'grid', gap: '3rem', maxWidth: '800px', margin: '0 auto' }}>
          {blogPosts.map((post) => (
            <article key={post.slug} className="card fade-in" style={{ padding: '2.5rem' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                {post.date}
              </div>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>{post.title}</h2>
              <p style={{ color: 'var(--muted-foreground)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} style={{ color: 'var(--primary)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Read Full Article <span>→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
