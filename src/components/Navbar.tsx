"use client";

import Link from "next/link";
import Logo from "./Logo";
import { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, status } = useSession();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, height: '110px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
        <Logo />
      </div>
    </nav>
  );

  const navLinks = [
    { name: "Academy", href: "/courses" },
    { name: "PEN Network", href: "/pen-network" },
    { name: "Naturals", href: "/naturals" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
    <nav className={`glass ${isScrolled ? 'scrolled' : ''}`} style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'all 0.3s ease',
      padding: isScrolled ? '0.5rem 0' : '1rem 0',
      borderBottom: '1px solid var(--border)',
      backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(12px)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Logo />
        
        {/* Desktop Links */}
        <div className="nav-links desktop-only" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              style={{ fontWeight: 600, color: 'var(--foreground)', fontSize: '0.95rem', textDecoration: 'none' }}
              className="nav-item"
            >
              {link.name}
            </Link>
          ))}
          
          {session ? (
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginLeft: '1rem', paddingLeft: '2rem', borderLeft: '1px solid var(--border)' }}>
              <Link href={(session.user as any)?.role === 'ADMIN' ? '/admin' : '/dashboard'} className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>
                Dashboard
              </Link>
              <button onClick={() => signOut()} className="btn" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem', backgroundColor: 'transparent', border: '1px solid var(--border)', color: 'var(--foreground)' }}>
                Sign Out
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginLeft: '1rem', paddingLeft: '2rem', borderLeft: '1px solid var(--border)' }}>
              <Link href="/login" style={{ fontWeight: 600, color: 'var(--foreground)', textDecoration: 'none', fontSize: '0.95rem' }}>
                Login
              </Link>
              <Link href="/register" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="mobile-only"
          style={{ 
            background: 'none', 
            border: 'none', 
            fontSize: '1.5rem', 
            cursor: 'pointer',
            padding: '0.5rem'
          }}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
        }
        @media (min-width: 769px) {
          .mobile-only { display: none !important; }
        }
      `}</style>
    </nav>

    {/* Mobile Menu Overlay - Escaped from Nav Stacking Context */}
    {isMenuOpen && (
      <div style={{
        position: 'fixed',
        top: '75px',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#ffffff',
        zIndex: 9999,
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        animation: 'fadeIn 0.3s ease',
        overflowY: 'auto'
      }}>
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
            style={{ fontSize: '1.5rem', fontWeight: 700, textDecoration: 'none', color: 'var(--foreground)' }}
          >
            {link.name}
          </Link>
        ))}
        
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
          {session ? (
            <>
              <Link 
                href={(session.user as any)?.role === 'ADMIN' ? '/admin' : '/dashboard'} 
                onClick={() => setIsMenuOpen(false)}
                className="btn btn-primary" 
                style={{ width: '100%', padding: '1.25rem', textAlign: 'center' }}
              >
                Go to Dashboard
              </Link>
              <button 
                onClick={() => { signOut(); setIsMenuOpen(false); }}
                className="btn" 
                style={{ width: '100%', padding: '1.25rem', backgroundColor: 'transparent', border: '1px solid var(--border)', color: 'var(--foreground)' }}
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link 
                href="/login" 
                onClick={() => setIsMenuOpen(false)}
                className="btn" 
                style={{ width: '100%', padding: '1.25rem', textAlign: 'center', backgroundColor: 'transparent', border: '1px solid var(--border)', color: 'var(--foreground)' }}
              >
                Log In
              </Link>
              <Link 
                href="/register" 
                onClick={() => setIsMenuOpen(false)}
                className="btn btn-primary" 
                style={{ width: '100%', padding: '1.25rem', textAlign: 'center' }}
              >
                Sign Up Free
              </Link>
            </>
          )}
        </div>
      </div>
    )}
    </>
  );
}

