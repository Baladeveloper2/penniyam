"use client";

import Link from "next/link";
import Image from "next/image";

export default function MarketplacePage() {
  return (
    <div className="section" style={{ padding: '0' }}>
      {/* Hero Section */}
      <div style={{ 
        position: 'relative', 
        height: '400px', 
        width: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center'
      }}>
        <Image 
          src="/marketplace.png" 
          alt="Penniyam Marketplace" 
          fill 
          style={{ objectFit: 'cover' }}
        />
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          backgroundColor: 'rgba(0,0,0,0.6)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem'
        }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Penniyam <span style={{ color: 'var(--accent)' }}>Marketplace</span></h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '700px' }}>
            Empowering students to take their products from the classroom to the world.
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: '5rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '5rem' }}>
          <div className="card fade-in" style={{ borderTop: '5px solid var(--accent)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Global Visibility</h3>
            <p style={{ color: 'var(--muted-foreground)' }}>Our platform is optimized to reach customers across India and internationally, ensuring your products get the attention they deserve.</p>
          </div>
          <div className="card fade-in" style={{ borderTop: '5px solid var(--accent)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Logistics Support</h3>
            <p style={{ color: 'var(--muted-foreground)' }}>We help our entrepreneurs understand packaging, shipping, and delivery standards to maintain a premium brand image.</p>
          </div>
          <div className="card fade-in" style={{ borderTop: '5px solid var(--accent)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Secure Payments</h3>
            <p style={{ color: 'var(--muted-foreground)' }}>Our integrated payment systems ensure that you get paid on time, every time, with complete transparency in every transaction.</p>
          </div>
        </div>

        <div style={{ textAlign: 'center', backgroundColor: 'var(--muted)', padding: '5rem 2rem', borderRadius: 'var(--radius)' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Are you ready to sell?</h2>
          <p style={{ color: 'var(--muted-foreground)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto' }}>
            The Penniyam Marketplace is exclusively available to our Academy graduates and PEN Network members.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/courses" className="btn btn-primary" style={{ backgroundColor: 'var(--accent)', boxShadow: '0 4px 14px 0 rgba(243, 156, 18, 0.39)' }}>Start Training</Link>
            <Link href="/contact" className="btn" style={{ border: '1px solid var(--border)' }}>Talk to an Expert</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
