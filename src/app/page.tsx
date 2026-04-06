"use client";

import Hero from "@/components/Home/Hero";
import Ecosystem from "@/components/Home/Ecosystem";
import SuccessStories from "@/components/Home/SuccessStories";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Hero />
      <Ecosystem />
      <SuccessStories />
      
      {/* Call to Action Section */}
      <section className="section" style={{ 
        textAlign: 'center', 
        background: 'linear-gradient(to bottom, var(--background), rgba(var(--primary-h), var(--primary-s), var(--primary-l), 0.08))',
        borderTop: '1px solid var(--border)' 
      }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <span style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.2em', display: 'block', marginBottom: '1.5rem' }}>Next Steps</span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1.5rem', fontWeight: 900, lineHeight: 1.2 }}>Ready to start your journey?</h2>
          <p style={{ color: 'var(--muted-foreground)', fontSize: '1.25rem', marginBottom: '3rem', lineHeight: 1.7 }}>
            Join our next batch of entrepreneurs and turn your potential into power. We are here to guide you every step of the way.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/courses" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>Join Academy</Link>
            <Link href="/contact" className="btn" style={{ backgroundColor: 'var(--foreground)', color: 'white', padding: '1rem 3rem', fontSize: '1.1rem' }}>Contact Support</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
