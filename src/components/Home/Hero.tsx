"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center', backgroundColor: '#fdfdfd' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 2 }}>
        <div className="fade-in" style={{ paddingRight: '2rem' }}>
          <span style={{ 
            color: 'var(--primary)', 
            fontWeight: 800, 
            fontSize: '0.85rem', 
            textTransform: 'uppercase', 
            letterSpacing: '0.2em',
            display: 'block',
            marginBottom: '1.5rem'
          }}>Penniyam Academy</span>
          <h1 style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', lineHeight: 1.1, marginBottom: '2rem', color: 'var(--foreground)', fontWeight: 900 }}>
            Empowering <br />
            <span style={{ color: 'var(--primary)' }}>Women</span> <br />
            Entrepreneurs
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--muted-foreground)', marginBottom: '3.5rem', maxWidth: '500px', lineHeight: 1.7 }}>
            Training | Business | Network | Market Access. We don't just teach skills; we build sustainable business ecosystems for the modern world.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link href="/courses" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>Explore Courses</Link>
            <Link href="/pen-network" className="btn btn-outline" style={{ 
              padding: '1rem 2.5rem', 
              fontSize: '1.1rem',
              border: '2px solid var(--primary)', 
              color: 'var(--primary)',
              background: 'transparent'
            }}>Join PEN Network</Link>
          </div>
        </div>
        
        <div className="hero-image-container fade-in" style={{ 
          position: 'relative', 
          borderRadius: '2rem', 
          overflow: 'hidden', 
          boxShadow: '0 30px 60px -15px rgba(0,0,0,0.15)',
          aspectRatio: '5/4'
        }}>
          <Image 
            src="/hero.png" 
            alt="Women Entrepreneurs Collaborating" 
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(20deg, rgba(0,0,0,0.3), transparent)' }}></div>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div style={{ 
        position: 'absolute', 
        top: '-15%', 
        right: '-10%', 
        width: '50%', 
        height: '70%', 
        background: 'var(--primary-light)', 
        borderRadius: '50%', 
        filter: 'blur(120px)', 
        opacity: 0.4,
        zIndex: 1
      }}></div>

      <style jsx>{`
        @media (max-width: 768px) {
          .container {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 3rem !important;
          }
          div[style*="paddingRight"] {
            padding-right: 0 !important;
          }
          p {
            margin-right: auto;
            margin-left: auto;
          }
          div[style*="display: flex"] {
            justify-content: center;
          }
          .hero-image-container {
             max-width: 500px;
             margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
