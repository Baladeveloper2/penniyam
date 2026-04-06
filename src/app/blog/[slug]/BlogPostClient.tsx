"use client";

import { use } from "react";
import Link from "next/link";

export default function BlogPostClient({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);

  return (
    <article className="section">
      <div className="container" style={{ maxWidth: '800px' }}>
        <Link href="/blog" style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: '2rem', display: 'inline-block' }}>
          ← Back to Blog
        </Link>
        
        <header style={{ marginBottom: '3rem' }}>
          <div style={{ color: 'var(--muted-foreground)', marginBottom: '1rem' }}>March 28, 2026 | Entrepreneurship</div>
          <h1 style={{ fontSize: '3rem' }}>How to Start a Home-Based Baking Business</h1>
        </header>

        <div className="blog-content" style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--foreground)' }}>
          <p style={{ marginBottom: '2rem' }}>
            Starting a business from your home kitchen is one of the most rewarding ways to achieve financial independence. 
            At Penniyam Academy, we've seen hundreds of women transform their passion for flour and sugar into sustainable income streams.
          </p>
          
          <h2 style={{ fontSize: '2rem', margin: '3rem 0 1.5rem' }}>1. Perfect Your Signature Product</h2>
          <p style={{ marginBottom: '2rem' }}>
            Before you launch, identify the one product that everyone raves about. Is it your tea cakes? Your sourdough bread? 
            Starting with a specialized niche helps you stand out in the local market.
          </p>

          <div style={{ backgroundColor: 'var(--primary-light)', padding: '2rem', borderRadius: 'var(--radius)', borderLeft: '5px solid var(--primary)', margin: '3rem 0' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Pro Tip from Penniyam</h3>
            <p>Consistency is key. Ensure that your product tastes and looks the same every single time a customer orders it.</p>
          </div>

          <h2 style={{ fontSize: '2rem', margin: '3rem 0 1.5rem' }}>2. Legalities and Food Safety</h2>
          <p style={{ marginBottom: '2rem' }}>
            Don't skip the paperwork. Ensure you have the necessary local food handling permits and that your kitchen meets hygiene standards. 
            This builds trust with your customers from day one.
          </p>

          {/* More content would go here */}
        </div>

        <section style={{ marginTop: '5rem', borderTop: '1px solid var(--border)', paddingTop: '3rem' }}>
          <h3 style={{ marginBottom: '2rem' }}>Inspired to start?</h3>
          <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <h4 style={{ fontSize: '1.25rem' }}>Baking & Bakery Course</h4>
              <p style={{ color: 'var(--muted-foreground)', fontSize: '0.9rem' }}>Join our next offline batch in Madurai.</p>
            </div>
            <Link href="/courses" className="btn btn-primary">Join Course</Link>
          </div>
        </section>
      </div>
    </article>
  );
}
