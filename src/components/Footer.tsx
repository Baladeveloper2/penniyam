"use client";

import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--muted)', padding: '6rem 0 2rem', marginTop: 'auto', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '4rem', marginBottom: '5rem' }}>
          <div style={{ gridColumn: '1 / -1', maxWidth: '400px', marginBottom: '1rem' }} className="footer-brand">
            <Logo />
            <p style={{ marginTop: '2rem', color: 'var(--muted-foreground)', lineHeight: 1.7, fontSize: '1.05rem' }}>
              Empowering Women Entrepreneurs through world-class Training, Business Networking, and Market Access.
            </p>
          </div>
          
          <div>
            <h4 style={{ color: 'var(--foreground)', fontSize: '1.25rem', fontWeight: 800, marginBottom: '2rem' }}>Ecosystem</h4>
            <ul style={{ listStyle: 'none', display: 'grid', gap: '1rem' }}>
              <li><Link href="/courses" style={{ color: 'var(--muted-foreground)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}>Penniyam Academy</Link></li>
              <li><Link href="/pen-network" style={{ color: 'var(--muted-foreground)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}>PEN Network</Link></li>
              <li><Link href="/naturals" style={{ color: 'var(--muted-foreground)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}>Penniyam Naturals</Link></li>
              <li><Link href="/marketplace" style={{ color: 'var(--muted-foreground)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}>Marketplace</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'var(--foreground)', fontSize: '1.25rem', fontWeight: 800, marginBottom: '2rem' }}>Contact</h4>
            <ul style={{ listStyle: 'none', display: 'grid', gap: '1rem' }}>
              <li style={{ color: 'var(--muted-foreground)', fontWeight: 500 }}>+91 90004 03803</li>
              <li style={{ color: 'var(--muted-foreground)', fontWeight: 500 }}>info@penniyam.in</li>
              <li style={{ color: 'var(--muted-foreground)', fontWeight: 500, lineHeight: 1.5 }}>Madurai, Tamil Nadu<br />India</li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ color: 'var(--foreground)', fontSize: '1.25rem', fontWeight: 800, marginBottom: '2rem' }}>Follow Us</h4>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#" className="btn" style={{ padding: '0.6rem 1.2rem', backgroundColor: 'white', border: '1px solid var(--border)', fontSize: '0.9rem', color: 'var(--foreground)', borderRadius: '100px' }}>WhatsApp</a>
              <a href="#" className="btn" style={{ padding: '0.6rem 1.2rem', backgroundColor: 'white', border: '1px solid var(--border)', fontSize: '0.9rem', color: 'var(--foreground)', borderRadius: '100px' }}>Instagram</a>
              <a href="#" className="btn" style={{ padding: '0.6rem 1.2rem', backgroundColor: 'white', border: '1px solid var(--border)', fontSize: '0.9rem', color: 'var(--foreground)', borderRadius: '100px' }}>Facebook</a>
            </div>
          </div>
        </div>
        
        <div style={{ 
          borderTop: '1px solid rgba(0,0,0,0.1)', 
          paddingTop: '2.5rem', 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          textAlign: 'center', 
          color: 'var(--muted-foreground)', 
          fontSize: '0.9rem' 
        }}>
          <p>© {new Date().getFullYear()} Penniyam Private Limited. All Rights Reserved.</p>
        </div>
      </div>
      
      <style jsx>{`
        @media (min-width: 1024px) {
          .footer-brand {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </footer>
  );
}
